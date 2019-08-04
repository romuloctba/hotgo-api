import { Test, TestingModule } from '@nestjs/testing';
import { AdminGateway } from './admin.gateway';
import { CreateUserDto } from '../user/models/createUserDto';
import { UserService } from '../user/user.service';
import { of } from 'rxjs';

describe('AdminGateway', () => {
  let gateway: AdminGateway;
  let userServiceMock: UserService;
  const fakeCreate = data => of(data).toPromise();
  beforeEach(async () => {
    userServiceMock = {
      create: jasmine.createSpy('create').and.callFake(fakeCreate),
    } as any;
    gateway = new AdminGateway(userServiceMock);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('Method: handleMessage', () => {
    it('should return success ', () => {
      const result = gateway.handleMessage({}, {});
      const expected = 'success';
      expect(result).toEqual(expected);
    });
  });

  describe('Method: createUserFromAdmin ', () => {
    it('should call userService create', async () => {
      const cli = {} as any;
      const body = {
        email: 'a@a.com',
        password: 'abv',
        phone: 'abc',
        firstName: 'abc',
        lastName: 'abc',
      };
      await gateway.createUserFromAdmin(cli, body);
      return expect(userServiceMock.create).toHaveBeenCalledWith(body);
    });
  });
});
