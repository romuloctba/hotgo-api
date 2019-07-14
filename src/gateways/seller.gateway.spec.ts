import { Test, TestingModule } from '@nestjs/testing';
import { SellerGateway } from './seller.gateway';

describe('SellerGateway', () => {
  let gateway: SellerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellerGateway],
    }).compile();

    gateway = module.get<SellerGateway>(SellerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
