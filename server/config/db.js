import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@mern-shop.jueyl.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
		);
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

export default connectDB;
