import heroValidator from '../heroValidator.js';
import HeroCollection from '../heroCollection.js';

const heroes = new HeroCollection();

export const createHero = (req, res) => {
	const { value: hero, error } = heroValidator.validate(req.body);

	if (error) {
		res.status(400).end('Malformed JSON input.');
		return;
	}

	if (heroes.getById(hero.id)) {
		res.status(409).end('A hero with the provided id already exists.');
		return;
	}

	heroes.create(hero);
	res.status(201).contentType('application/json').json(hero);
};

export const readHero = (req, res) => {
	const id = req.params.id;
	const hero = heroes.getById(id);

	if (!hero) {
		res.status(404).end('No hero was found with the provided id.');
		return;
	}

	res.json(hero);
};

export const updateHero = (req, res) => {
	const { value: hero, error } = heroValidator.validate(req.body);

	if (error) {
		res.status(400).end('Malformed JSON input.');
		return;
	}

	heroes.deleteById(hero.id);
	heroes.create(hero);
	res.status(201).contentType('application/json').json(hero);
};

export const deleteHero = (req, res) => {
	const id = req.params.id;
	const hero = heroes.deleteById(id);

	if (!hero) {
		res.status(404).end('No hero was found with the provided id.');
		return;
	}

	res.status(200).contentType('application/json').json(hero);
};