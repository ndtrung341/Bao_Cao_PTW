import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI);
		console.log('Connect mongodb successfully');
	} catch (error) {
		console.log('Connect failed', error);
		process.exit(1);
	}
};

export default connectDB;
