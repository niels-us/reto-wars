import sequelize, { SCHEMA } from '../../core/database/db-connection';
import { DataTypes, Model } from 'sequelize';
import { ISpecieES } from '../struct/species.struct';

export default class Species extends Model implements ISpecieES {
  public id: number;
  public nombre: string;
  public clasificacion: string;
  public designacion: string;
  public altura_promedio: string;
  public colores_piel: string;
  public colores_de_pelo: string;
  public colores_ojos: string;
  public vida_promedio: string;
  public mundo_natal: string;
  public idioma: string;
  public personas: string[];
  public peliculas: string[];
  public creado: string;
  public editado: string;
  public url: string;
}

Species.init(
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
    clasificacion: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    designacion: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    altura_promedio: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    colores_piel: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    colores_de_pelo: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    colores_ojos: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    vida_promedio: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    mundo_natal: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    idioma: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    personas: {
      type: new DataTypes.JSON(),
      allowNull: false,
    },
    peliculas: {
      type: new DataTypes.JSON(),
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
    modelName: 'Species',
    schema: SCHEMA,
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    },
  },
);
