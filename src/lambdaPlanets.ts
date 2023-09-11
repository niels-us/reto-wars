import * as dotenv from 'dotenv';
dotenv.config();
import Env from './core/environment/index';
import Cors from './core/cors';
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );
    app.use(eventContext());

    await Env.init();
    await Cors.init();
    app.useGlobalPipes(new ValidationPipe({}));
    app.enableCors({
      origin: Cors.ORIGIN_CORS,
      methods: ['*'],
      allowedHeaders: ['*'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });

    await app.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
