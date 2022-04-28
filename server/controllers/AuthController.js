import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import AppError from '../utils/AppError.js';
import asyncHandler from '../utils/AsyncHandler.js';

export const register = asyncHandler(async (req, res) => {
	const { fullname, password, email } = req.body;
	// validate unique email
	await User.isUniqueEmail(email);

	// create new user
	const user = await User.create({ fullname, email, password });

	// create access token and refresh token
	const accessToken = user.createAccessToken();
	const refreshToken = user.createRefreshToken();

	// response data
	res.cookie('refreshToken', refreshToken, {
		httpOnly: true,
		maxAge: 3 * 60 * 1000,
	});

	return res.status(201).json({
		status: 'success',
		message: 'Register successfully',
		accessToken,
	});
});

export const login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	console.log({ email, password });
	// find user
	const user = await User.findOne({ email }).select('+password');
	if (!user || !(await user.comparePassword(password))) {
		// compare password
		throw new AppError('Incorrect email or password', 400);
	}

	// create access token and refresh token
	const accessToken = user.createAccessToken();
	const refreshToken = user.createRefreshToken();

	res.cookie('refreshToken', refreshToken, {
		httpOnly: true,
		maxAge: 2 * 60 * 1000,
	});

	return res.status(200).json({
		status: 'success',
		message: 'Login successfully',
		accessToken,
	});
});

export const refreshToken = asyncHandler(async (req, res) => {
	// get refresh token
	const refreshToken = req.cookies.refreshToken;
	if (!refreshToken) throw new AppError('Please login now', 400);

	// decode token
	const decoded = jwt.verify(refreshToken, process.env.TOKEN_REFRESH_SECRET);

	// check user if exists
	const user = await User.findById(decoded.userId);
	if (!user) throw new AppError('User not exists', 400);

	// create new access token
	const accessToken = user.createAccessToken();

	return res.status(200).json({
		status: 'success',
		message: '',
		accessToken,
	});
});

export const getMe = asyncHandler(async (req, res) => {
	const user = req.user;
	return res.status(200).json({ ...user._doc, _id: undefined });
});

export const logout = asyncHandler(async (req, res) => {
	res.clearCookie('refreshToken');
	return res.status(200).json({
		status: 'success',
		message: 'Logout success',
	});
});
