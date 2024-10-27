import express from 'express';

const app = express();

app.use((_req, res) => {
	console.error('Could not handle request.');

	res.status(404)
		.setHeader('Content-Type', 'application/json')
		.json({ error: 'Could not handle request' })
});

export default app;
