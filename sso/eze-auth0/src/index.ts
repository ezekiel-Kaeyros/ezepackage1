require("dotenv").config()
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './auth';
import fileRouter from './routes/files';
import getItemRouter from './routes/getItem';
import config from './config';

const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(cors({
  origin: [config.landingPageUrl, config.communitiesUrl, config.livingLibraryUrl],
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Use session middleware
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Add body parser middleware for JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ status: "Okay" });
});

app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('User is authenticated:', req.user);
    res.send(`Hello ${(req.user as any)?.nameID}`);
  } else {
    console.log('User not authenticated, redirecting to /auth/login');
    res.redirect('/auth/login');
  }
});

app.use('/api/files', fileRouter);
app.use('/api/items', getItemRouter)

// Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
};

// Connect to MongoDB and start the server
mongoose.connect(config.mongodbUri).then(
  () => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log("NODE ENV: ", process.env.NODE_ENV)
      console.log("APP ENV: ", process.env.NEXT_PUBLIC_APP_ENV)
      console.log(`Server is running on port ${PORT}`);
    });
  },
  err => {
    console.error('Error connecting to MongoDB:', err.message);
  }
);
