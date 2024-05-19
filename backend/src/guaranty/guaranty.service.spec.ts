import { Test, TestingModule } from '@nestjs/testing';
import { GuarantyService } from './guaranty.service';

describe('GuarantyService', () => {
  let service: GuarantyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuarantyService],
    }).compile();

    service = module.get<GuarantyService>(GuarantyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
