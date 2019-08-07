import { Test, TestingModule } from '@nestjs/testing';
import { ComissionResolver } from './comission.resolver';

describe('ComissionResolver', () => {
  let resolver: ComissionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComissionResolver],
    }).compile();

    resolver = module.get<ComissionResolver>(ComissionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
