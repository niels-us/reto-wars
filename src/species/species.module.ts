import { Module } from '@nestjs/common';
import { SpeciesService } from './services/species.service';
import { SpeciesController } from './controllers/species.controller';
import { ClientHttp } from '../core/infrastructure/client-http.infrastructure';

@Module({
  controllers: [SpeciesController],
  providers: [SpeciesService, ClientHttp],
})
export class SpeciesModule {}
