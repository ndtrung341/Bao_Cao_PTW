import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';

import authRouter from './routes/authRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import { verifyToken } from './middlewares/authMiddleware.js';

dotenv.config({ path: path.resolve() + '/.env' });

// connect db
connectDB();

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// API ROUTES
app.use('/api/auth', authRouter);
app.get('/api/test', verifyToken, function (req, res) {
	return res.json({ hi: 1 });
});

// Not found handler
app.use('*', (req, res, next) => {
	res.status(404).send('Not Found');
});

// Error handler
app.use(errorHandler);

const port = process.env.PORT || 3002;
app.listen(port, () => `App running on ${port}`);
