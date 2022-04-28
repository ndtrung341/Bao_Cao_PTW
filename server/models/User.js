import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import AppError from '../utils/AppError.js';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
	{
		fullname: String,
		email: String,
		password: {
			type: String,
			select: false,
		},
		avatar: {
			type: String,
			default: null,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

// hash password before save
userSchema.pre('save', async function (req, res, next) {
	if (!this.isModified()) return;
	this.password = await bcrypt.hash(this.password, 8);
	next();
});

// check unique email
userSchema.statics.isUniqueEmail = async function (email) {
	const user = await User.findOne({ email });
	console.log(user);
	if (user) throw new AppError('Email already in use', 400);
};

// generator access token
userSchema.methods.createAccessToken = function () {
	const token = jwt.sign({ userId: this._id }, process.env.TOKEN_SECRET, {
		expiresIn: process.env.TOKEN_LIFETIME,
	});
	return token;
};

// generator refresh token
userSchema.methods.createRefreshToken = function () {
	const token = jwt.sign(
		{ userId: this._id },
		process.env.TOKEN_REFRESH_SECRET,
		{
			expiresIn: process.env.TOKEN_REFRESH_LIFETIME,
		},
	);

	this.refreshToken = token;
	return token;
};

// compare password
userSchema.methods.comparePassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('users', userSchema);
export default User;
