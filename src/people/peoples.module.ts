import { Module } from '@nestjs/common';
import { PeoplesService } from './services/peoples.service';
import { PeoplesController } from './controllers/people.controller';
import { ClientHttp } from '../core/infrastructure/client-http.infrastructure';

@Module({
  controllers: [PeoplesController],
  providers: [PeoplesService, ClientHttp],
})
export class PeoplesModule {}
