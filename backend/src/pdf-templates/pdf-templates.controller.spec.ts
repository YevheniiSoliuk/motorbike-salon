import { Test, TestingModule } from '@nestjs/testing';
import { PdfTemplatesController } from './pdf-templates.controller';
import { PdfTemplatesService } from './pdf-templates.service';

describe('PdfTemplatesController', () => {
  let controller: PdfTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfTemplatesController],
      providers: [PdfTemplatesService],
    }).compile();

    controller = module.get<PdfTemplatesController>(PdfTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
