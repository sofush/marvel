import express from 'express';
import { createHero, readHero, updateHero, deleteHero } from '../controller/heroController.js';

export const app = express();

app.use(express.json());
app.post('/hero', createHero);
app.get('/hero/:id', readHero);
app.put('/hero', updateHero);
app.delete('/hero/:id', deleteHero);

export default app;
