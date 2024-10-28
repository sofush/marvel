import fs from 'node:fs';

export default class HeroCollection {
	constructor() {
		try {
			const heroes = fs.readFileSync('./data/heroes.json', 'utf-8');
			console.log('Succesfully loaded heroes from JSON file.');
			this.heroes = JSON.parse(heroes);
		} catch (err) {
			console.error(err);
			this.heroes = [];
		}
	}

	getById(id) {
		return this.heroes.find(hero => hero.id == id);
	}

	getAll() {
		return this.heroes;
	}

	deleteById(id) {
		const idx = this.heroes.findIndex(hero => hero.id == id);

		if (idx >= 0) {
			const removed = this.heroes.splice(idx, 1);
			return removed[0];
		}

		return null;
	}

	create(hero) {
		this.heroes.push(hero);
	}
}
