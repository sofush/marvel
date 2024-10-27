export default class HeroCollection {
	constructor(heroes) {
		this.heroes = JSON.parse(heroes);
	}

	getById(id) {
		return this.heroes.find(hero => hero.id == id);
	}

	deleteById(id) {
		const idx = this.heroes.findIndex(hero => hero.id == id);

		if (idx >= 0) {
			const removed = this.heroes.splice(idx, 1);
			return removed;
		}

		return null;
	}

	create(hero) {
		this.heroes.push(hero);
	}
}
