export const PeopleStub = (method: string) => {
  if (method === 'findAll') {
    return {
      nombre: 'Luke Skywalker',
      altura: '172',
      masa: '77',
      color_pelo: 'blond',
      color_piel: 'fair',
      color_ojos: 'blue',
      ano_nacimiento: '19BBY',
      genero: 'male',
      mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
      peliculas: null,
      especie: ['https://swapi.py4e.com/api/species/1/'],
      vehiculos: [
        'https://swapi.py4e.com/api/vehicles/14/',
        'https://swapi.py4e.com/api/vehicles/30/',
      ],
      naves_espaciales: [
        'https://swapi.py4e.com/api/starships/12/',
        'https://swapi.py4e.com/api/starships/22/',
      ],
      creado: '2014-12-09T13:50:51.644000Z',
      editado: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.py4e.com/api/people/1/',
    };
  }

  if (method === 'update') {
    return {
      rows: 1,
    };
  }

  if (method === 'create') {
    return {
      id: 1,
    };
  }

  if (method === 'delete') {
    return {
      rows: 1,
    };
  }
};
