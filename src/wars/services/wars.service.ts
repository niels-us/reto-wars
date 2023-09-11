import WarsDB from '../db/wars';
import { ClientHttp } from '../../core/infrastructure/client-http.infrastructure';
import { IWars } from '../struct/wars.struct';
import { IEntityId, IResponse, IRows } from '../struct/wars.response.struct';
import { Injectable } from '@nestjs/common';
import { WrasMapper } from '../mappers/wars.mapper';

@Injectable()
export class WarsService {
  private warsDB = new WarsDB();
  constructor(private readonly clientHttp: ClientHttp) {}

  async create(params: IWars): Promise<IResponse<IEntityId>> {
    const created = await this.warsDB.create(params);
    return {
      data: {
        id: created.id,
      },
    };
  }

  async findAll(query: IWars): Promise<IResponse<IWars[]>> {
    const responseData = await this.warsDB.findAll(query);
    return {
      data: responseData,
    };
  }

  async findOne(id: number): Promise<IResponse<IWars>> {
    const responseData = await this.warsDB.findOneById(id);
    return {
      data: responseData,
    };
  }

  async findOneWars(id: number) {
    const responseData = await this.clientHttp.planetsById(id);
    if (responseData.error) {
      throw new Error(responseData.error);
    }

    return {
      data: responseData ? WrasMapper.toProgramDetail(responseData.data) : null,
    };
  }

  async update(id: number, params: IWars): Promise<IResponse<IRows>> {
    const rows = await this.warsDB.update(id, params);
    return {
      data: { rows },
    };
  }

  async remove(id: number): Promise<IResponse<IRows>> {
    const rows = await this.warsDB.delete(id);
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
