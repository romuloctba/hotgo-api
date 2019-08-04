import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;

  const validPass = 'a0faf20bde9787b61f68179655eb8bc8f20bfe7f294e12a48125a0d1372f9f75';
  const expectedUser = { id: 'valid user id', password: validPass } as any;
  const returnIfValid = query => query.password === validPass ? expectedUser : null;
 /* crypto.createHmac('sha256', 'oi').digest('hex')
  * > 'a0faf20bde9787b61f68179655eb8bc8f20bfe7f294e12a48125a0d1372f9f75' */

  beforeEach(async () => {
    const userServiceMock = {
      findOne: jasmine.createSpy().and.callFake(returnIfValid),
    } as any;
    const jwtServiceMock = {
      sign: jasmine.createSpy('sign'),
    } as any;
    service = new AuthService(userServiceMock, jwtServiceMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Method: validateUser ', () => {
    it('Should return return the user if valid ', async () => {
      const actual = await service.validateUser('someuser', 'oi');
      return expect(actual).toEqual(expectedUser);
    });
    it('Should return return null if NOT valid ', async () => {
      const actual = await service.validateUser('someuser', 'NOT the validPass');
      return expect(actual).toEqual(null);
    });

  });

  describe('Method: login ', () => {
    it('should call validateUser with correct parameters ', async () => {
      service.validateUser = jasmine.createSpy('validateUser').and.returnValue({ id: 'validUser '} as any);
      const details = { username: 'uname', password: 'psswd' };
      await service.login(details);
      return expect(service.validateUser).toHaveBeenCalledWith(details.username, details.password);
    });

    it('should throw if invalid credentials ', async () => {
      expect.assertions(1);
      service.validateUser = jasmine.createSpy('validateUser').and.returnValue(of(false).toPromise());
      const details = { username: 'uname', password: 'psswd' };
      try {
        await service.login(details);
      } catch (e) {
        expect(e.message).toEqual(new UnauthorizedException().message);
      }
    });
  });
});
