export const SpecieStub = (method: string) => {
  if (method === 'findAll') {
    return {
      nombre: 'Mon CalamarI',
      clasificacion: 'amphibian',
      designacion: 'sentient',
      altura_promedio: '160',
      colores_piel: 'red, blue, brown, magenta',
      colores_de_pelo: 'none',
      colores_ojos: 'yellow',
      vida_promedio: 'unknown',
      mundo_natal: 'https://swapi.py4e.com/api/planets/31/',
      idioma: 'Mon Calamarian',
      personas: ['https://swapi.py4e.com/api/people/27/'],
      peliculas: ['https://swapi.py4e.com/api/films/3/'],
      creado: '2014-12-18T11:09:52.263000Z',
      editado: '2014-12-20T21:36:42.153000Z',
      url: 'https://swapi.py4e.com/api/species/8/',
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
