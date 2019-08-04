import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateService } from './affiliate.service';

describe('AffiliateService', () => {
  let service: AffiliateService;

  beforeEach(async () => {
    const affiliateRepositoryMock = {} as any;
    service = new AffiliateService(affiliateRepositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
