import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
