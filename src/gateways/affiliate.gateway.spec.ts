import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateGateway } from './affiliate.gateway';

describe('AffiliateGateway', () => {
  let gateway: AffiliateGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffiliateGateway],
    }).compile();

    gateway = module.get<AffiliateGateway>(AffiliateGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
