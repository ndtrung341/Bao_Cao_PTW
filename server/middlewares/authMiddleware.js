import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import AppError from '../utils/AppError.js';

export const verifyToken = async function (req, res, next) {
	try {
		const headers = req.headers;
		const token =
			headers.authorization && headers.authorization.split(' ')[1];
		const { exp } = jwt.decode(token);
		console.log('expired in', new Date(exp * 1000).toTimeString());

		const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
		const user = await User.findOne({ _id: decoded.userId });

		req.user = user;
		next();
	} catch (error) {
		next(new AppError('Unauthenticated', 401));
	}
};
