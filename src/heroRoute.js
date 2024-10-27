import express from 'express';
import fs from 'node:fs';
import HeroCollection from './data.js';

function loadHeroes() {
	try {
		const heroes = fs.readFileSync('./heroes.json', 'utf-8');
		console.log('Succesfully loaded heroes from JSON file.');
		return new HeroCollection(heroes);
	} catch (err) {
		console.error(err);
	}
}

export const app = express();
const heroes = loadHeroes();

app.use(express.json());

app.get('/hero/:id', (req, res) => {
	const id = req.params.id;
	const hero = heroes.getById(id);

	if (!hero) {
		res.status(404).end('No hero was found with the provided id.');
		return;
	}

	res.json(hero);
});

app.delete('/hero/:id', (req, res) => {
	const id = req.params.id;
	const hero = heroes.deleteById(id);

	if (!hero) {
		res.status(404).end('No hero was found with the provided id.');
		return;
	}

	res.status(200).contentType('application/json').json(hero);
});

app.post('/hero', (req, res) => {
	const hero = req.body;

	if (!hero || !hero.id || !hero.name) {
		res.status(400).end('Malformed JSON input.');
		return;
	}

	heroes.create(hero);
	res.status(200).contentType('application/json').json(hero);
});

export default app;