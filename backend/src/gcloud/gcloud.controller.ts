import { Controller } from '@nestjs/common';
import { GcloudService } from './gcloud.service';

@Controller('gcloud')
export class GcloudController {
  constructor(private readonly gcloudService: GcloudService) {}
}
