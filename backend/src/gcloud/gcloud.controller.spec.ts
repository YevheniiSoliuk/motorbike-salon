import { Test, TestingModule } from '@nestjs/testing';
import { GcloudController } from './gcloud.controller';
import { GcloudService } from './gcloud.service';

describe('GcloudController', () => {
  let controller: GcloudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GcloudController],
      providers: [GcloudService],
    }).compile();

    controller = module.get<GcloudController>(GcloudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
