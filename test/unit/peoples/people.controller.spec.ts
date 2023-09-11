import { Test } from '@nestjs/testing';
import { PeoplesController } from 'src/people/controllers/people.controller';
import { PeopleStub } from 'src/../test/unit/peoples/stub/people.controller.stub';
import { IPeopleES } from 'src/people/struct/peoples.struct';
import { PeoplesModule } from 'src/people/peoples.module';
import { IEntityId, IRows } from 'src/core/struc/response.struct';

describe('PeopleController', () => {
  let peoplesController: PeoplesController;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [PeoplesModule],
    }).compile();

    peoplesController = module.get<PeoplesController>(PeoplesController);
    jest.clearAllMocks();
  });

  describe('People - create', () => {
    let people: IEntityId;

    beforeEach(async () => {
      peoplesController.create = jest
        .fn()
        .mockReturnValue(PeopleStub('create'));

      people = await peoplesController.create({
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
      });
    });

    test('then it should return the people to equal', () => {
      expect(people).toEqual(PeopleStub('create'));
    });

    test('then it should return the people to Contain', () => {
      expect(people.id).toBe(1);
    });
  });

  describe('Peoples - findAll', () => {
    let people: Partial<IPeopleES[]>;

    beforeEach(async () => {
      peoplesController.findAll = jest
        .fn()
        .mockReturnValue([PeopleStub('findAll')]);

      people = await peoplesController.findAll({
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
      });
    });

    test('then it should return the pepole to equal', () => {
      expect(people).toEqual([PeopleStub('findAll')]);
    });

    test('then it should return the pepole to Have Length one', () => {
      expect(people).toHaveLength(1);
    });

    test('then it should return the pepole to Be', () => {
      expect(people[0].nombre).toBe('Luke Skywalker');
    });
  });

  describe('peoples - update', () => {
    let peoples: IRows;

    beforeEach(async () => {
      peoplesController.update = jest
        .fn()
        .mockReturnValue(PeopleStub('update'));

      peoples = await peoplesController.update(1, {
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
      });
    });

    test('then it should return the peoples to equal', () => {
      expect(peoples).toEqual(PeopleStub('update'));
    });

    test('then it should return the peoples to Contain', () => {
      expect(peoples.rows).toBe(1);
    });
  });

  describe('peoples - delete', () => {
    let peoples: IRows;

    beforeEach(async () => {
      peoplesController.remove = jest
        .fn()
        .mockReturnValue(PeopleStub('delete'));

      peoples = await peoplesController.remove(1);
    });

    test('then it should return the peoples to equal', () => {
      expect(peoples).toEqual(PeopleStub('delete'));
    });

    test('then it should return the peoples to Contain', () => {
      expect(peoples.rows).toBe(1);
    });
  });
});
