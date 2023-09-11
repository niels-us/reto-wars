import sequelize, { SCHEMA } from '../../core/database/db-connection';
import { DataTypes, Model } from 'sequelize';
import { IPeopleES } from '../struct/peoples.struct';

export default class Peoples extends Model implements IPeopleES {
  public id: number;
  public nombre: string;
  public altura: string;
  public masa: string;
  public color_pelo: string;
  public color_piel: string;
  public color_ojos: string;
  public ano_nacimiento: string;
  public genero: string;
  public mundo_natal: string;
  public peliculas: string[];
  public especie: string[];
  public vehiculos: string[];
  public naves_espaciales: string[];
  public creado: string;
  public editado: string;
  public url: string;
}

Peoples.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    altura: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    masa: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    color_pelo: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    color_piel: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    color_ojos: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    ano_nacimiento: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    genero: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    mundo_natal: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    peliculas: {
      type: new DataTypes.JSON(),
      allowNull: true,
    },
    especie: {
      type: new DataTypes.JSON(),
      allowNull: true,
    },
    vehiculos: {
      type: new DataTypes.JSON(),
      allowNull: true,
    },
    naves_espaciales: {
      type: new DataTypes.JSON(),
      allowNull: true,
    },
    creado: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    editado: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    url: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Peoples',
    schema: SCHEMA,
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
);
