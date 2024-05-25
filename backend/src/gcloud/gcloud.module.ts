import { Module } from '@nestjs/common';
import { GcloudService } from './gcloud.service';
import { GcloudController } from './gcloud.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [GcloudController],
  providers: [GcloudService],
  exports: [GcloudService],
})
export class GcloudModule {}
