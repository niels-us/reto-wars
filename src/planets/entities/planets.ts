import { IPlanetES } from '../struct/Planets.struct';
import Planets from './planets.model';

export default class PlanetsDB {
  async create(params: Partial<IPlanetES>): Promise<Partial<IPlanetES>> {
    return await Planets.create(params);
  }
  async findAll(query) {
    const where: {
      nombre?: string;
      periodo_rotacion?: string;
      periodo_orbital?: string;
      diametro?: string;
      clima?: string;
      gravedad?: string;
      terreno?: string;
      agua_superficial?: string;
      poblacion?: string;
      residentes?: string[];
      peliculas?: string[];
      creado?: string;
      editado?: string;
      url?: string;
    } = {};
    if (query.nombre) where.nombre = query.nombre;
    if (query.periodo_rotacion) where.periodo_rotacion = query.periodo_rotacion;
    if (query.periodo_orbital) where.periodo_orbital = query.periodo_orbital;
    if (query.diametro) where.diametro = query.diametro;
    if (query.clima) where.clima = query.clima;
    if (query.gravedad) where.gravedad = query.gravedad;
    if (query.terreno) where.terreno = query.terreno;
    if (query.agua_superficial) where.agua_superficial = query.agua_superficial;
    if (query.poblacion) where.poblacion = query.poblacion;
    if (query.residentes) where.residentes = query.residentes;
    if (query.peliculas) where.peliculas = query.peliculas;
    if (query.creado) where.creado = query.creado;
    if (query.editado) where.editado = query.editado;
    if (query.url) where.url = query.url;
    const include = [];
    return Planets.findAll({
      where,
      include,
    });
  }

  async findOneById(id: number): Promise<IPlanetES> {
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
