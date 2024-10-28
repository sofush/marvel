const createDeleteTd = (heroId, tableRow) => {
	const td = document.createElement('td');
	const a = document.createElement('a');

	a.classList.add('delete');
	a.innerHTML = 'Delete';
	td.appendChild(a);

	a.addEventListener('click', async (_event) => {
		const header = await fetch(`/hero/${heroId}`, { method: 'DELETE' });

		if (!header.ok) {
			alert('Could not delete hero.');
			return;
		}

		tableRow.remove();
	});

	return td;
};

const addHeroToTable = (hero) => {
	const idHtml = `<th scope="row">${hero.id}</th>`;
	const nameHtml = `<td>${hero.name}</td>`;
	const aliasHtml = `<td>${hero.alias}</td>`;
	const powersHtml = `<td>${hero.powers}</td>`;

	const tableRow = document.createElement('tr');
	tableRow.innerHTML = idHtml + nameHtml + aliasHtml + powersHtml;
	tableRow.appendChild(createDeleteTd(hero.id, tableRow));

	const tbody = document.getElementById('tbody');
	tbody.appendChild(tableRow);
};

addEventListener("DOMContentLoaded", async (_event) => {
	const heroes = await fetch('/heroes');

	if (!heroes.ok) {
		alert('Could not load heroes from REST API.');
		return;
	}

	const heroesArray = await heroes.json();
	heroesArray.forEach(addHeroToTable);
});
