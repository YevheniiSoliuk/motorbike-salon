import { Controller, Get, Param, Render } from '@nestjs/common';
import { PdfTemplatesService } from './pdf-templates.service';
import { ConfigurationsService } from 'src/configurations/configurations.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PDF Templates')
@Controller('pdf-templates')
export class PdfTemplatesController {
  constructor(
    private readonly pdfTemplatesService: PdfTemplatesService,
    private readonly configurationsService: ConfigurationsService,
  ) {}

  @Get(':configurationId')
  // @Render('product-configuration-template')
  @Render('test')
  async getProductConfigurationTemplate(
    @Param('configurationId') configurationId: string,
  ) {
    console.log(configurationId);
    const configuration =
      await this.configurationsService.findOneById(+configurationId);
    return { configuration };
  }
}
