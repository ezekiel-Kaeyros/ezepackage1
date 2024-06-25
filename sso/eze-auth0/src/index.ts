import express, { Request, Response, NextFunction } from 'express';
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


// Middleware to check for the 'module' query parameter
const checkModuleMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log("fullUrl: ", fullUrl)
  if (req.query.module === undefined || fullUrl === 'http://dc49-2a0d-3341-b19b-2f10-b186-9adc-6e9a-8e11.ngrok-free.app/callback') {
    // If 'module' query parameter is present, require and execute zotero.ts
    import('./zotero').then(zotero => {
      zotero.default(req, res, next);
    }).catch(next);
  } else {
    // If 'module' query parameter is not present, proceed to the next middleware
    next();
  }
};

// Use the module check middleware
app.use(checkModuleMiddleware);

console.log("EI ENTER NA FOR HERE.....")


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