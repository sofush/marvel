export default class HeroCollection {
	constructor(heroes) {
		if (heroes)
			this.heroes = JSON.parse(heroes);
		else
			this.heroes = [];
	}

	getById(id) {
		return this.heroes.find(hero => hero.id == id);
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
