import { ISpecieEN, ISpecieES } from '../struct/species.struct';

export class SpeciesMapper {
  static toSpecie(specie: ISpecieEN): ISpecieES {
    return {
      nombre: specie.name,
      clasificacion: specie.classification,
      designacion: specie.designation,
      altura_promedio: specie.average_height,
      colores_piel: specie.skin_colors,
      colores_de_pelo: specie.hair_colors,
      colores_ojos: specie.eye_colors,
      vida_promedio: specie.average_lifespan,
      mundo_natal: specie.homeworld,
      idioma: specie.language,
      personas: specie.people,
      peliculas: specie.films,
      creado: specie.created,
      editado: specie.edited,
      url: specie.url,
    };
  }
}
