import PlanetsDB from '../entities/planets';
import { ClientHttp } from '../../core/infrastructure/client-http.infrastructure';
import { IPlanetES } from '../struct/planets.struct';
import { IEntityId, IResponse, IRows } from '../../core/struc/response.struct';
import { Injectable } from '@nestjs/common';
import { PlanetsMapper } from '../mappers/planets.mapper';

@Injectable()
export class PlanetsService {
  private PlanetsDB = new PlanetsDB();
  constructor(private readonly clientHttp: ClientHttp) {}

  async create(params: IPlanetES): Promise<IResponse<IEntityId>> {
    const created = await this.PlanetsDB.create(params);
    return {
      data: {
        id: created.id,
      },
    };
  }

  async findAll(query: IPlanetES): Promise<IResponse<IPlanetES[]>> {
    const responseData = await this.PlanetsDB.findAll(query);
    return {
      data: responseData,
    };
  }

  async findOne(id: number): Promise<IResponse<IPlanetES>> {
    const responseData = await this.PlanetsDB.findOneById(id);
    return {
      data: responseData,
    };
  }

  async findOnePlanets(id: number): Promise<IResponse<IPlanetES>> {
    const responseData = await this.clientHttp.planetsById(id);
    if (responseData.error) {
      throw new Error(responseData.error);
    }

    return {
      data: responseData ? PlanetsMapper.toPlanet(responseData.data) : null,
    };
  }

  async update(id: number, params: IPlanetES): Promise<IResponse<IRows>> {
    const rows = await this.PlanetsDB.update(id, params);
    return {
      data: { rows },
    };
  }

  async remove(id: number): Promise<IResponse<IRows>> {
    const rows = await this.PlanetsDB.delete(id);
    return {
      data: { rows },
    };
  }

  // async translate(value: any) {
  //   return Object.entries(value)
  //     .map(([key, value]) => ({
  //       ...{ [this.dictionary[key] || key]: value },
  //     }))
  //     .reduce((acc, item) => ({ ...acc, ...item }), {});
  // }
}
