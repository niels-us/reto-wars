import { Module } from '@nestjs/common';
import { WarsModule } from './wars/wars.module';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [WarsModule, PlanetsModule, SpeciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
