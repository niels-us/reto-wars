import * as dotenv from 'dotenv';
dotenv.config();
// import Env from './core/environment/index';
// import Cors from './core/cors/index';
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { WarsModule } from './wars/wars.module';
import Env from './environment/index';
import Cors from './cors';

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
    app.enableCors({
      origin: Cors.ORIGIN_CORS,
      methods: ['*'],
      allowedHeaders: ['*'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });
    app.use(eventContext());

    await Env.init();
    await Cors.init();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    // app.use(rawBodyMiddleware());
    // app.enableCors({
    //   origin: Cors.ORIGIN_CORS,
    //   methods: ['*'],
    //   allowedHeaders: ['*'],
    //   preflightContinue: false,
    //   optionsSuccessStatus: 204,
    // });

    const config = new DocumentBuilder()
      .setTitle('wars API')
      .setDescription('The wars API description')
      .setVersion('1.0')
      .addTag('wars')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      include: [WarsModule],
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
