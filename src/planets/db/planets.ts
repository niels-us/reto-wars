// import { IArea } from '@creek12/types';
import Planets from './planets.model';
// import { IGetAreaQuery, IGetAreaQueryPaginated } from '../structs/area.struct';

export default class PlanetsDB {
  private defaultPerPage = 10;
  private defaultPage = 1;

  async create(params: any) {
    return await Planets.create(params);
  }
  async findAll(query) {
    const where: {
      name?: string;
    } = {};
    if (query.name) where.name = query.name;
    const include = [];
    return Planets.findAll({
      where,
      include,
    });
  }

  async findOneById(id: number) {
    return await Planets.findByPk(id);
  }

  async update(id: number, params: any): Promise<number> {
    const [rows] = await Planets.update(params, {
      where: { id },
    });
    return rows;
  }

  async delete(id: number): Promise<number> {
    const rows = await Planets.destroy({
      where: { id },
    });
    return rows;
  }
}
