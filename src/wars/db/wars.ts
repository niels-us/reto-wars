// import { IArea } from '@creek12/types';
import Wars from '../db/wars.model';
// import { IGetAreaQuery, IGetAreaQueryPaginated } from '../structs/area.struct';

export default class WarsDB {
  private defaultPerPage = 10;
  private defaultPage = 1;

  async create(params: any) {
    return await Wars.create(params);
  }
  async findAll(query) {
    console.log(query);
    // const where: {
    //   name?: string;
    // } = {};
    // if (query.name) where.name = query.name;
    const include = [];
    return Wars.findAll({
      where: { query },
      include,
    });
  }

  async findOneById(id: number) {
    return await Wars.findByPk(id);
  }

  async update(id: number, params: any): Promise<number> {
    const [rows] = await Wars.update(params, {
      where: { id },
    });
    return rows;
  }

  async delete(id: number): Promise<number> {
    const rows = await Wars.destroy({
      where: { id },
    });
    return rows;
  }
}
