import sequelize, { SCHEMA } from '../../core/database/db-connection';
import { DataTypes, Model } from 'sequelize';
import { IPlanetES } from '../struct/Planets.struct';

export default class Planets extends Model implements IPlanetES {
  public id: number;
  public nombre: string;
  public periodo_rotacion: string;
  public periodo_orbital: string;
  public diametro: string;
  public clima: string;
  public gravedad: string;
  public terreno: string;
  public agua_superficial: string;
  public poblacion: string;
  public residentes: string[];
  public peliculas: string[];
  public creado: string;
  public editado: string;
  public url: string;
}

Planets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    periodo_rotacion: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    periodo_orbital: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    diametro: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    clima: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    gravedad: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    terreno: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    agua_superficial: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    poblacion: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    residentes: {
      type: new DataTypes.ARRAY(DataTypes.STRING(255)),
      allowNull: false,
    },
    peliculas: {
      type: new DataTypes.ARRAY(DataTypes.STRING(255)),
      allowNull: false,
    },
    creado: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    editado: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    url: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Planets',
    schema: SCHEMA,
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
);
