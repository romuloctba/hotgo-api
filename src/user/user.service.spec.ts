import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let userRepositoryMock: any;
  beforeEach(async () => {
    userRepositoryMock = {
      find: jasmine.createSpy('find'),
      findOne: jasmine.createSpy('findOne'),
      save: jasmine.createSpy('save'),
    } as any;
    service = new UserService(userRepositoryMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should call repository find', () => {
      service.findAll();
      expect(userRepositoryMock.find).toHaveBeenCalled();
    });
  });
  describe('create', () => {
    it('should call repository save', () => {
      const mockBody = {} as any;
      service.create(mockBody);
      expect(userRepositoryMock.save).toHaveBeenCalledWith(mockBody)
    });
  });
  describe('find', () => {
    it('should call repository find with query', () => {
      const queryMock = {};
      service.find(queryMock);
      expect(userRepositoryMock.find).toHaveBeenCalledWith(queryMock);
    });
  });
  describe('findById', () => {
    it('should call repository findOne', () => {
      const queryMock = '12';
      service.findById(queryMock);
      expect(userRepositoryMock.findOne).toHaveBeenCalledWith(queryMock);
    });
  });
  describe('findOne', () => {
    it('should call repository findOne', () => {
      const queryMock = {};
      service.findOne(queryMock);
      expect(userRepositoryMock.findOne).toHaveBeenCalledWith(queryMock);
    });
  });
  // describe('createAffiliateByUser', () => {
  //   it('should call repository ');
  // });
});
