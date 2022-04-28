import express from 'express';
import {
	register,
	login,
	refreshToken,
	getMe,
	logout,
} from '../controllers/AuthController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/token', refreshToken);
router.post('/me', verifyToken, getMe);
router.post('/logout', verifyToken, logout);

export default router;
