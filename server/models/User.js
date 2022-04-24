import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		fullname: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
	},
	{ timestamps: true },
);

const User = mongoose.model('user', userSchema);
export default User;
