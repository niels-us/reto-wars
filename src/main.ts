import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import sequelize from './core/database/db-connection';
import Env from './core/environment/index';
import Cors from './core/cors';
import { ValidationPipe } from '@nestjs/common';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { PeoplesModule } from './people/peoples.module';
async function bootstrap() {
  await Env.init();
  await Cors.init();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: Cors.ORIGIN_CORS,
    methods: ['*'],
    allowedHeaders: ['*'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  const config = new DocumentBuilder()
    .setTitle('wars API')
    .setDescription('The wars API description')
    .setVersion('1.0')
    .addTag('wars')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [PlanetsModule, SpeciesModule, PeoplesModule],
  });
  SwaggerModule.setup('api', app, document);

  try {
    await sequelize.sync({
      alter: {
        drop: false,
      },
    });
  } catch (error) {
    console.error(error);
  }
  await app.listen(process.env.APP_PORT || Env.APP_PORT);
}
bootstrap();
