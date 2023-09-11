import { ISpecieES } from '../struct/species.struct';
import Species from './species.model';

export default class SpeciesDB {
  async create(params: Partial<ISpecieES>): Promise<Partial<ISpecieES>> {
    return await Species.create(params);
  }
  async findAll(query: Partial<ISpecieES>): Promise<ISpecieES[]> {
    const where: {
      nombre?: string;
      clasificacion?: string;
      designacion?: string;
      altura_promedio?: string;
      colores_piel?: string;
      colores_de_pelo?: string;
      colores_ojos?: string;
      vida_promedio?: string;
      mundo_natal?: string;
      idioma?: string;
      personas?: string[];
      peliculas?: string[];
      creado?: string;
      editado?: string;
      url?: string;
    } = {};

    if (query.nombre) where.nombre = query.nombre;
    if (query.clasificacion) where.clasificacion = query.clasificacion;
    if (query.designacion) where.designacion = query.designacion;
    if (query.altura_promedio) where.altura_promedio = query.altura_promedio;
    if (query.colores_piel) where.colores_piel = query.colores_piel;
    if (query.colores_de_pelo) where.colores_de_pelo = query.colores_de_pelo;
    if (query.colores_ojos) where.colores_ojos = query.colores_ojos;
    if (query.vida_promedio) where.vida_promedio = query.vida_promedio;
    if (query.mundo_natal) where.mundo_natal = query.mundo_natal;
    if (query.idioma) where.idioma = query.idioma;
    if (query.personas) where.personas = query.personas;
    if (query.peliculas) where.peliculas = query.peliculas;
    if (query.creado) where.creado = query.creado;
    if (query.editado) where.editado = query.editado;
    if (query.url) where.url = query.url;
    const include = [];
    return Species.findAll({
      where,
      include,
    });
  }

  async findOneById(id: number): Promise<ISpecieES> {
    return await Species.findByPk(id);
  }

  async update(id: number, params: any): Promise<number> {
    const [rows] = await Species.update(params, {
      where: { id },
    });
    return rows;
  }

  async delete(id: number): Promise<number> {
    const rows = await Species.destroy({
      where: { id },
    });
    return rows;
  }
}
