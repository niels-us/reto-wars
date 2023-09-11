import { Module } from '@nestjs/common';
import { WarsService } from './services/wars.service';
import { WarsController } from './controllers/wars.controller';
import { ClientHttp } from '../core/infrastructure/client-http.infrastructure';

@Module({
  controllers: [WarsController],
  providers: [WarsService, ClientHttp],
})
export class WarsModule {}
