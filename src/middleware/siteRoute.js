import express from 'express';
import path from 'node:path';

export const app = express();
const staticFolder = path.join('..', 'static');

app.use('/static', express.static(staticFolder));

app.use('/edit', (_req, res) => {
	res.sendFile('edit.html', { root: staticFolder });
});

app.use('/', (_req, res) => {
	res.sendFile('index.html', { root: staticFolder });
});

export default app;
