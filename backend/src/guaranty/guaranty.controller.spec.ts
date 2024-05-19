import { Test, TestingModule } from '@nestjs/testing';
import { GuarantyController } from './guaranty.controller';
import { GuarantyService } from './guaranty.service';

describe('GuarantyController', () => {
  let controller: GuarantyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuarantyController],
      providers: [GuarantyService],
    }).compile();

    controller = module.get<GuarantyController>(GuarantyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
