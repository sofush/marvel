import express from 'express';
import morgan from 'morgan';
import heroRoute from './middleware/heroRoute.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(heroRoute);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
