import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';
import Env from '../environment/index';
export const SCHEMA = 'wars';

export default new Sequelize('', '', '', {
  dialect: 'mysql',
  dialectModule: mysql2,
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  hooks: {
    beforeConnect: async (config) => {
      config.database = Env.DB_NAME;
      config.username = Env.DB_USER;
      config.password = Env.DB_PASSWORD;
      config.host = Env.DB_HOST;
      config.port = Env.DB_PORT;
    },
  },
});
