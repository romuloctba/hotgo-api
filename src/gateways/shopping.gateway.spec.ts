import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingGateway } from './shopping.gateway';

describe('ShoppingGateway', () => {
  let gateway: ShoppingGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingGateway],
    }).compile();

    gateway = module.get<ShoppingGateway>(ShoppingGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
