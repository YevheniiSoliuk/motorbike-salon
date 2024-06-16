import { Test, TestingModule } from '@nestjs/testing';
import { PdfTemplatesService } from './pdf-templates.service';

describe('PdfTemplatesService', () => {
  let service: PdfTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfTemplatesService],
    }).compile();

    service = module.get<PdfTemplatesService>(PdfTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
