import { Test } from '@nestjs/testing';
import { SpeciesController } from 'src/species/controllers/species.controller';
import { SpecieStub } from 'src/../test/unit/species/stub/species.controller.stub';
import { ISpecieES } from 'src/species/struct/species.struct';
import { SpeciesModule } from 'src/species/species.module';
import { IEntityId, IRows } from 'src/core/struc/response.struct';

describe('SpecieController', () => {
  let speciesController: SpeciesController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [SpeciesModule],
    }).compile();

    speciesController = module.get<SpeciesController>(SpeciesController);
    jest.clearAllMocks();
  });

  describe('Specie - create', () => {
    let specie: IEntityId;

    beforeEach(async () => {
      speciesController.create = jest
        .fn()
        .mockReturnValue(SpecieStub('create'));

      specie = await speciesController.create({
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
      });
    });

    test('then it should return the specie to equal', () => {
      expect(specie).toEqual(SpecieStub('create'));
    });

    test('then it should return the specie to Contain', () => {
      expect(specie.id).toBe(1);
    });
  });

  describe('Species - findAll', () => {
    let specie: Partial<ISpecieES[]>;

    beforeEach(async () => {
      speciesController.findAll = jest
        .fn()
        .mockReturnValue([SpecieStub('findAll')]);

      specie = await speciesController.findAll({
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
      });
    });

    test('then it should return the pepole to equal', () => {
      expect(specie).toEqual([SpecieStub('findAll')]);
    });

    test('then it should return the pepole to Have Length one', () => {
      expect(specie).toHaveLength(1);
    });

    test('then it should return the pepole to Be', () => {
      expect(specie[0].nombre).toBe('Mon CalamarI');
    });
  });

  describe('species - update', () => {
    let species: IRows;

    beforeEach(async () => {
      speciesController.update = jest
        .fn()
        .mockReturnValue(SpecieStub('update'));

      species = await speciesController.update(1, {
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
      });
    });

    test('then it should return the species to equal', () => {
      expect(species).toEqual(SpecieStub('update'));
    });

    test('then it should return the species to Contain', () => {
      expect(species.rows).toBe(1);
    });
  });

  describe('species - delete', () => {
    let species: IRows;

    beforeEach(async () => {
      speciesController.remove = jest
        .fn()
        .mockReturnValue(SpecieStub('delete'));

      species = await speciesController.remove(1);
    });

    test('then it should return the species to equal', () => {
      expect(species).toEqual(SpecieStub('delete'));
    });

    test('then it should return the species to Contain', () => {
      expect(species.rows).toBe(1);
    });
  });
});
