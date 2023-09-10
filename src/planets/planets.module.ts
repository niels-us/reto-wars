import { Module } from '@nestjs/common';
import { PlanetsService } from './services/planets.service';
import { PlanetsController } from './controllers/planets.controller';
import { ClientHttp } from '../infrastructure/client-http.infrastructure';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService, ClientHttp],
})
export class PlanetsModule {}
