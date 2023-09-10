import { Injectable } from '@nestjs/common';
import { config, SSM } from 'aws-sdk';
import { ICors } from './cors.structs';

@Injectable()
export class Cors implements ICors {
  ORIGIN_CORS: string;

  constructor() {
    config.update({
      region: process.env.REGION,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    });
  }

  private async getParameterWorker(): Promise<Cors> {
    const ssm = new SSM();
    const params = {
      Name: `/application/CORS`,
      WithDecryption: true,
    };
    const result = await ssm.getParameter(params).promise();
    const cors: Cors = JSON.parse(result.Parameter.Value);
    return cors;
  }

  async init() {
    const cors = await this.getParameterWorker();

    Object.keys(cors).forEach((prop: string) => {
      this[prop] = cors[prop];
    });
  }
}

export default new Cors();
