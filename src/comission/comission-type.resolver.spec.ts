import { Test, TestingModule } from '@nestjs/testing';
import { ComissionTypeResolver } from './comission-type.resolver';

describe('ComissionTypeResolver', () => {
  let resolver: ComissionTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComissionTypeResolver],
    }).compile();

    resolver = module.get<ComissionTypeResolver>(ComissionTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
