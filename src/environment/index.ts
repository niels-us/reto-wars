/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, Logger } from '@nestjs/common';
import { IEnvironment } from './environment.structs';
import { config, SSM } from 'aws-sdk';

@Injectable()
export class Environment implements IEnvironment {
  APP_PORT: string;
  DB_HOST: string;
  DB_NAME: string;
  DB_PASSWORD: string;
  DB_PORT: string;
  DB_USER: string;
  API_WARS_URL: string;
  ENV = process.env.APP_ENV;

  constructor() {
    config.update({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
  }
  USE_LOCAL = process.env.USE_LOCAL;
  API_ENROLLMENT_TOKEN: string;

  PROJECT = 'wars';
  private logger = new Logger(Environment.name);
  private onInits = [];

  private async getParameterWorker(): Promise<IEnvironment> {
    const client = new SSM();
    this.logger.log('Project: ' + this.PROJECT);
    this.logger.log('Environment: ' + this.ENV);
    const params = {
      Name: `/application/api-${this.PROJECT}/${this.ENV}/ENVIRONMENTS`,
      WithDecryption: true,
    };
    const result = await client.getParameter(params).promise();
    const environment: IEnvironment = JSON.parse(result.Parameter.Value);
    return environment;
  }

  async init() {
    const environment = await this.getParameterWorker();

    Object.keys(environment).forEach((prop: string) => {
      this[prop] = environment[prop];
    });
    this.modifications();
    this.onInits.forEach((onInit: () => void) => {
      onInit();
    });
    this.displayInfo();
    if (this.ENV === 'local') {
      this.logVariables(environment);
    }
  }

  displayInfo() {
    this.logger.log('App. Port: ' + process.env.APP_PORT || this.APP_PORT);
    this.logger.log('DB Host: ' + this.DB_HOST);
    this.logger.log('DB Name: ' + this.DB_NAME);
    this.logger.log('DB User: ' + this.DB_USER);
  }

  logVariables(environment: IEnvironment) {
    Object.keys(environment).forEach((prop: string) => {
      this.logger.log('Variable: ' + prop + ': ' + environment[prop]);
    });
  }

  onInit(onInit: () => void) {
    this.onInits.push(onInit);
  }

  modifications() {
    if (this.USE_LOCAL === 'true') {
      this.DB_HOST = process.env.DB_HOST;
      this.DB_NAME = process.env.DB_NAME;
      this.DB_USER = process.env.DB_USER;
      this.DB_PASSWORD = process.env.DB_PASSWORD;
      this.DB_PORT = process.env.DB_PORT;
    }
  }
}

export default new Environment();
