import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Import the cors package
import authRouter from './auth';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(cors({
  origin: process.env.REDIRECT_ORIGIN, // Your client application URL
  methods: 'GET,POST,PUT',
  allowedHeaders: 'Content-Type',
  credentials: true,
}));

// Use session middleware
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const connection= mongoose.connection;

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Home Page');
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

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});