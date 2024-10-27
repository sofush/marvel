import express from 'express';
import morgan from 'morgan';
import heroRoute from './heroRoute.js';

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(heroRoute);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
