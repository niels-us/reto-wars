import sequelize, { SCHEMA } from '../../database/db-connection';
import { DataTypes, Model } from 'sequelize';

export default class Planets extends Model {
  public id: number;
  public name: string;
  public height: string;
  public mass: string;
}

Planets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    height: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    mass: {
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