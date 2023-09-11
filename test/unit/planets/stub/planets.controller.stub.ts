export const PlanetStub = (method: string) => {
  if (method === 'findAll') {
    return {
      nombre: 'Tatooine',
      periodo_rotacion: '23',
      periodo_orbital: '304',
      diametro: '10465',
      clima: 'arid',
      gravedad: '1 standard',
      terreno: 'desert',
      agua_superficial: '1',
      poblacion: '200000',
      residentes: ['https://swapi.py4e.com/api/people/1/'],
      peliculas: ['https://swapi.py4e.com/api/films/1/'],
      creado: '2014-12-09T13:50:49.641000Z',
      editado: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi.py4e.com/api/planets/1/',
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
