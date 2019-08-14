import { Test, TestingModule } from '@nestjs/testing';
import { GetNetService } from './get-net.service';

describe('GetNetService', () => {
  let service: GetNetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetNetService],
    }).compile();

    service = module.get<GetNetService>(GetNetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
