import { IPeopleEN, IPeopleES } from '../struct/peoples.struct';

export class PeoplesMapper {
  static toPeople(people: IPeopleEN): IPeopleES {
    return {
      nombre: people.name,
      altura: people.height,
      masa: people.mass,
      color_pelo: people.hair_color,
      color_piel: people.skin_color,
      color_ojos: people.eye_color,
      ano_nacimiento: people.birth_year,
      genero: people.gender,
      mundo_natal: people.homeworld,
      peliculas: people.films,
      especie: people.species,
      vehiculos: people.vehicles,
      naves_espaciales: people.starships,
      creado: people.created,
      editado: people.edited,
      url: people.url,
    };
  }
}
