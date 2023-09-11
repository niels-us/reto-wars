import { Module } from '@nestjs/common';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { PeoplesModule } from './people/peoples.module';

@Module({
  imports: [PlanetsModule, SpeciesModule, PeoplesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
