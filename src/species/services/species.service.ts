import SpeciesDB from '../entities/species';
import { ClientHttp } from '../../core/infrastructure/client-http.infrastructure';
import { ISpecieES } from '../struct/species.struct';
import { IEntityId, IResponse, IRows } from '../../core/struc/response.struct';
import { Injectable } from '@nestjs/common';
import { SpeciesMapper } from '../mappers/species.mapper';

@Injectable()
export class SpeciesService {
  private SpeciesDB = new SpeciesDB();
  constructor(private readonly clientHttp: ClientHttp) {}

  async create(params: ISpecieES): Promise<IResponse<IEntityId>> {
    const created = await this.SpeciesDB.create(params);
    return {
      data: {
        id: created.id,
      },
    };
  }

  async findAll(query: ISpecieES): Promise<IResponse<ISpecieES[]>> {
    const responseData = await this.SpeciesDB.findAll(query);
    return {
      data: responseData,
    };
  }

  async findOne(id: number): Promise<IResponse<ISpecieES>> {
    const responseData = await this.SpeciesDB.findOneById(id);
    return {
      data: responseData,
    };
  }

  async findOneSpecies(id: number): Promise<IResponse<ISpecieES>> {
    const responseData = await this.clientHttp.speciesById(id);
    if (responseData.error) {
      throw new Error(responseData.error);
    }

    return {
      data: responseData ? SpeciesMapper.toSpecie(responseData.data) : null,
    };
  }

  async update(id: number, params: ISpecieES): Promise<IResponse<IRows>> {
    const rows = await this.SpeciesDB.update(id, params);
    return {
      data: { rows },
    };
  }

  async remove(id: number): Promise<IResponse<IRows>> {
    const rows = await this.SpeciesDB.delete(id);
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
