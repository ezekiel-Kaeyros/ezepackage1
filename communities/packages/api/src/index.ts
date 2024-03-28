import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import passport from 'passport';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import routes from './routes';
import socket from './socket';
import { initDb } from './db';
import { initPassport } from './authentication';
import { errorHandler } from './utils/errorHandler';

initDb();
initPassport();

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use(errorHandler)

const httpServer = createServer(app);
socket(httpServer);

const PORT = process.env.PORT || process.env.API_PORT;
httpServer.listen({ port: PORT }, () => {
  console.log(`httpServer ready at http://localhost:${PORT}`);
});
