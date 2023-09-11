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
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { PeoplesModule } from './people/peoples.module';

const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
      { bufferLogs: true },
    );
    app.use(eventContext());

    await Env.init();
    await Cors.init();
    const config = new DocumentBuilder()
      .setTitle('Start Wars API')
      .setDescription('The wars API description')
      .setVersion('1.0')
      .addTag('Start Wars')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      include: [PlanetsModule, SpeciesModule, PeoplesModule],
    });
    SwaggerModule.setup('api', app, document);

    await app.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
