import PeoplesDB from '../entities/peoples';
import { ClientHttp } from '../../core/infrastructure/client-http.infrastructure';
import { IPeopleES } from '../struct/peoples.struct';
import { IEntityId, IResponse, IRows } from '../../core/struc/response.struct';
import { Injectable } from '@nestjs/common';
import { PeoplesMapper } from '../mappers/peoples.mapper';

@Injectable()
export class PeoplesService {
  private peoplesDB = new PeoplesDB();
  constructor(private readonly clientHttp: ClientHttp) {}

  async create(params: IPeopleES): Promise<IResponse<IEntityId>> {
    const created = await this.peoplesDB.create(params);
    return {
      data: {
        id: created.id,
      },
    };
  }

  async findAll(query: IPeopleES): Promise<IResponse<IPeopleES[]>> {
    const responseData = await this.peoplesDB.findAll(query);
    return {
      data: responseData,
    };
  }

  async findOne(id: number): Promise<IResponse<IPeopleES>> {
    const responseData = await this.peoplesDB.findOneById(id);
    return {
      data: responseData,
    };
  }

  async findOnePeoples(id: number): Promise<IResponse<IPeopleES>> {
    const responseData = await this.clientHttp.peoplesById(id);
    if (responseData.error) {
      throw new Error(responseData.error);
    }

    return {
      data: responseData ? PeoplesMapper.toPeople(responseData.data) : null,
    };
  }

  async update(id: number, params: IPeopleES): Promise<IResponse<IRows>> {
    const rows = await this.peoplesDB.update(id, params);
    return {
      data: { rows },
    };
  }

  async remove(id: number): Promise<IResponse<IRows>> {
    const rows = await this.peoplesDB.delete(id);
    return {
      data: { rows },
    };
  }
}
