import { Test, TestingModule } from '@nestjs/testing';
import { AffiliateController } from './affiliate.controller';
import { AffiliateService } from '../affiliate/affiliate.service';

describe('Affiliate Controller', () => {
  let controller: AffiliateController;
  let affiliateServiceMock: AffiliateService;
  beforeEach(async () => {
    affiliateServiceMock = {
      findAll: jasmine.createSpy('findAll'),
      create: jasmine.createSpy('create'),
      read: jasmine.createSpy('read'),
    } as any;
    controller = new AffiliateController(affiliateServiceMock);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('method: getAffiliates', () => {
    it('should find all affiliates', () => {
      controller.getAffiliates();
      expect(affiliateServiceMock.findAll).toHaveBeenCalled();
    });
  });

  describe('method createAffiliate ', () => {
    it('should create affiliate ', () => {
      const reqMock = {
        user: { id: '23' },
      } as any;
      controller.createAffiliate(reqMock);
      expect(affiliateServiceMock.create).toHaveBeenCalled();
    });
  });

  describe('method getAffiliate ', () => {
    it('should get affiliate by id ', () => {
      const myId = '23';
      controller.getAffiliate(myId);
      expect(affiliateServiceMock.read).toHaveBeenCalledWith(myId);
    });
  });
});
