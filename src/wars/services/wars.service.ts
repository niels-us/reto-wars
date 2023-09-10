import { Body, Injectable } from '@nestjs/common';
import { CreateWarDto } from '../dto/create-war.dto';
import { UpdateWarDto } from '../dto/update-war.dto';
import WarsDB from '../db/wars';
import { ClientHttp } from '../../infrastructure/client-http.infrastructure';

@Injectable()
export class WarsService {
  private warsDB = new WarsDB();
  constructor(private readonly clientHttp: ClientHttp) {}
  async create(@Body() body: CreateWarDto) {
    const response = await this.warsDB.create(body);
    return { data: response.id };
  }

  async findAll() {
    const responseData = await this.warsDB.findAll({});
    return {
      data: responseData,
    };
  }

  async findOne(id: number) {
    const planets = await this.clientHttp.planetsById(id);
    console.log(planets);
    const responseData = await this.warsDB.findOneById(id);
    return `This action returns a #${responseData.id} war`;
  }

  async update(id: number, params: UpdateWarDto) {
    const rows = await this.warsDB.update(id, params);
    return {
      data: { rows },
    };
  }

  async remove(id: number) {
    const rows = await this.warsDB.delete(id);
    return `This action removes a #${rows} war`;
  }
}
