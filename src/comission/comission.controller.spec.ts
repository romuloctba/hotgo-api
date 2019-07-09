import { Test, TestingModule } from '@nestjs/testing';
import { ComissionController } from './comission.controller';

describe('Comission Controller', () => {
  let controller: ComissionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComissionController],
    }).compile();

    controller = module.get<ComissionController>(ComissionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
