const urlParams = new URLSearchParams(window.location.search);
const heroId = parseInt(urlParams.get('id'));

const handleFormSubmission = async (id, name, alias, powers) => {
	const hero = {
		id,
		name,
		alias,
		powers: powers.split(','),
	};

	const header = await fetch('/hero', {
		method: 'PUT',
		body: JSON.stringify(hero),
		headers: {
			'Content-Type': 'application/json',
		}
	});

	if (!header.ok) {
		alert('Could not update hero.');
		return;
	}

	window.location.href = '/';
};

const populateForm = (hero) => {
	const idInput = document.getElementById('idInput');
	const nameInput = document.getElementById('nameInput');
	const aliasInput = document.getElementById('aliasInput');
	const powersInput = document.getElementById('powersInput');
	const form = document.getElementById('form');

	if (!idInput || !nameInput || !aliasInput || !powersInput || !form) {
		console.error('Missing form or input element.');
		return;
	}

	idInput.value = heroId;
	nameInput.value = hero.name;
	aliasInput.value = hero.alias;
	powersInput.value = hero.powers;

	form.addEventListener('submit', async (_event) => {
		handleFormSubmission(
			heroId,
			nameInput.value,
			aliasInput.value,
			powersInput.value
		);
	});
};

document.addEventListener("DOMContentLoaded", async (_event) => {
	if (!heroId) {
		alert(`ID is invalid.`);
		window.location.href = '/';
		return;
	}

	const hero = await fetch(`/hero/${heroId}`);

	if (!hero.ok) {
		alert(`Could not load hero with id ${heroId}.`);
		return;
	}

	const heroJson = await hero.json();
	populateForm(heroJson);
});
