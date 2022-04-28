export const errorHandler = (err, req, res, next) => {
	const statusCode = err.statusCode;
	const message = err.message;

	console.log(err.name);
	console.log(err.message);

	res.status(statusCode).json({
		status: 'failed',
		message,
	});
};
