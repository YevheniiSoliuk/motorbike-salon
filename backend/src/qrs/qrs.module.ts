import { Module } from '@nestjs/common';
import { QrsService } from './qrs.service';
import { QrsController } from './qrs.controller';

@Module({
  controllers: [QrsController],
  providers: [QrsService],
})
export class QrsModule {}
