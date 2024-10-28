test('GET /hero/1', async () => {
    const hero = await fetch('http://localhost:3000/hero/1');
    expect(hero.ok).toBeTruthy();

    const response = await hero.json();
    expect(response).toEqual({
      'id': 1,
      'name': 'Captain America',
      'alias': 'Steve Rogers',
      'powers': [ 'Super strength', 'Enhanced agility', 'Vibranium shield' ],
    });
});

test('DELETE /hero/1', async () => {
    const hero = await fetch('http://localhost:3000/hero/1', { method: 'DELETE' });
    expect(hero.ok).toBeTruthy();

    const response = await hero.json();
    expect(response).toEqual({
      'id': 1,
      'name': 'Captain America',
      'alias': 'Steve Rogers',
      'powers': [ 'Super strength', 'Enhanced agility', 'Vibranium shield' ],
    });
    
    const nothing = await fetch('http://localhost:3000/hero/1');
    expect(nothing.ok).toBeFalsy();
});

test('PUT /hero/1', async () => {
    const hero = {
      id: 1,
      name: 'Test Hero',
      alias: 'Test Hero Alias',
      powers: [
        'Power One',
        'Power Two',
      ]
    };

    const heroReq = await fetch('http://localhost:3000/hero', {
      method: 'PUT',
      body: JSON.stringify(hero),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    expect(heroReq.ok).toBeTruthy();

    const response = await heroReq.json();
    expect(response).toEqual(hero);
});

test('POST /hero/1', async () => {
    const hero = {
      id: 7,
      name: 'Test Hero',
      alias: 'Test Hero Alias',
      powers: [
        'Power One',
        'Power Two',
      ]
    };

    const heroReq = await fetch('http://localhost:3000/hero', {
      method: 'POST',
      body: JSON.stringify(hero),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    expect(heroReq.ok).toBeTruthy();

    const response = await heroReq.json();
    expect(response).toEqual(hero);
});