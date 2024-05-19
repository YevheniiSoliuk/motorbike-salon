import { Controller } from '@nestjs/common';
import { GuarantyService } from './guaranty.service';

@Controller('guaranty')
export class GuarantyController {
  constructor(private readonly guarantyService: GuarantyService) {}
}
