import { Module } from '@nestjs/common';
import { WarsModule } from './wars/wars.module';
import { PlanetsModule } from './planets/planets.module';

@Module({
  imports: [WarsModule, PlanetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
