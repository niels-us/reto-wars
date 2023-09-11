import { Test } from '@nestjs/testing';
import { PlanetsController } from 'src/planets/controllers/planets.controller';
import { PlanetStub } from 'src/../test/unit/planets/stub/planets.controller.stub';
import { IPlanetES } from 'src/planets/struct/planets.struct';
import { PlanetsModule } from 'src/planets/planets.module';
import { IEntityId, IRows } from 'src/core/struc/response.struct';

describe('PlanetController', () => {
  let planetsController: PlanetsController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [PlanetsModule],
    }).compile();

    planetsController = module.get<PlanetsController>(PlanetsController);
    jest.clearAllMocks();
  });

  describe('Planet - create', () => {
    let planet: IEntityId;

    beforeEach(async () => {
      planetsController.create = jest
        .fn()
        .mockReturnValue(PlanetStub('create'));

      planet = await planetsController.create({
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
      });
    });

    test('then it should return the planet to equal', () => {
      expect(planet).toEqual(PlanetStub('create'));
    });

    test('then it should return the planet to Contain', () => {
      expect(planet.id).toBe(1);
    });
  });

  describe('Planets - findAll', () => {
    let planet: Partial<IPlanetES[]>;

    beforeEach(async () => {
      planetsController.findAll = jest
        .fn()
        .mockReturnValue([PlanetStub('findAll')]);

      planet = await planetsController.findAll({
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
      });
    });

    test('then it should return the pepole to equal', () => {
      expect(planet).toEqual([PlanetStub('findAll')]);
    });

    test('then it should return the pepole to Have Length one', () => {
      expect(planet).toHaveLength(1);
    });

    test('then it should return the pepole to Be', () => {
      expect(planet[0].nombre).toBe('Tatooine');
    });
  });

  describe('planets - update', () => {
    let planets: IRows;

    beforeEach(async () => {
      planetsController.update = jest
        .fn()
        .mockReturnValue(PlanetStub('update'));

      planets = await planetsController.update(1, {
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
      });
    });

    test('then it should return the planets to equal', () => {
      expect(planets).toEqual(PlanetStub('update'));
    });

    test('then it should return the planets to Contain', () => {
      expect(planets.rows).toBe(1);
    });
  });

  describe('planets - delete', () => {
    let planets: IRows;

    beforeEach(async () => {
      planetsController.remove = jest
        .fn()
        .mockReturnValue(PlanetStub('delete'));

      planets = await planetsController.remove(1);
    });

    test('then it should return the planets to equal', () => {
      expect(planets).toEqual(PlanetStub('delete'));
    });

    test('then it should return the planets to Contain', () => {
      expect(planets.rows).toBe(1);
    });
  });
});
