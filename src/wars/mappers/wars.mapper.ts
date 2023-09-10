import { IPlanet } from '../struct/wars.struct';

export class WrasMapper {
  static toProgramDetail(program: IPlanet) {
    return {
      nombre: program.name,
      período_rotación: program.rotation_period,
      periodo_orbital: program.orbital_period,
      diámetro: program.diameter,
      clima: program.climate,
      gravedad: program.gravity,
      terreno: program.terrain,
      agua_superficial: program.surface_water,
      población: program.population,
      residentes: [program.residents],
      películas: [program.films],
      creado: program.created,
      editado: program.edited,
      URL: program.url,
    };
  }
}
