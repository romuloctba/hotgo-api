import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { of } from 'rxjs';

describe('User Controller', () => {
  let controller: UserController;
  let mockUserService: UserService;
  beforeEach(() => {
    mockUserService = {
      findAll: jasmine.createSpy('findAll'),
      create: jasmine.createSpy('create'),
      findById: jasmine.createSpy('findById').and.returnValue(of({}).toPromise()),
      createAffiliateByUser: jasmine.createSpy('createAffiliateByUser'),
    } as any;
    controller = new UserController(mockUserService); // module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllUsers', () => {
    it('should call service findAll ', () => {
      controller.findAllUsers();
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });
  describe('createUser', () => {
    it('should call service create ', () => {
      const mockUser = {} as any;
      controller.createUser(mockUser);
      expect(mockUserService.create).toHaveBeenCalledWith(mockUser);
    });
  });
  describe('findById', () => {
    it('should call service findById with req.user.id if me', () => {
      const reqMock = { user : { id: 'abc' }} as any;
      controller.findById('me', reqMock);
      expect(mockUserService.findById).toHaveBeenCalledWith(reqMock.user.id);
    });
    it('should call service findById with id', () => {
      const reqMock = { user : { id: 'abc' }} as any;
      const testId = '1';
      controller.findById(testId, reqMock);
      expect(mockUserService.findById).toHaveBeenCalledWith(testId);
    });
  });
  describe('createAffiliateByUser', () => {
    it('should call service createAffiliate ', () => {
      const mockUserBody = {} as any;
      controller.createAffiliateByUser(mockUserBody);
      expect(mockUserService.createAffiliateByUser).toHaveBeenCalledWith(mockUserBody);
    });
  });
});
