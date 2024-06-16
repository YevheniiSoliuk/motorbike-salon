import { Module } from '@nestjs/common';
import { PdfTemplatesService } from './pdf-templates.service';
import { PdfTemplatesController } from './pdf-templates.controller';
import { ConfigurationsModule } from 'src/configurations/configurations.module';

@Module({
  imports: [ConfigurationsModule],
  controllers: [PdfTemplatesController],
  providers: [PdfTemplatesService],
})
export class PdfTemplatesModule {}
