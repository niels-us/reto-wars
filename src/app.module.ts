import { Module } from '@nestjs/common';
import { WarsModule } from './wars/wars.module';

@Module({
  imports: [WarsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
