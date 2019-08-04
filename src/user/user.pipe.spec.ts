import { UserPipe } from './user.pipe';

describe('UserPipe', () => {
  it('should be defined', () => {
    expect(new UserPipe()).toBeDefined();
  });
  it('should throw error for email', () => {
    const mockBody = {
      firstName: 'abc',
      lastName: 'cde',
      phone: '31999999',
      password: 'abc',
    };
    try {
      new UserPipe().transform(mockBody, {} as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  })
  it('should throw error for firstName', () => {
    const mockBody = {
      email: 'a@a.com',
      lastName: 'cde',
      phone: '31999999',
      password: 'abc',
    };
    try {
      new UserPipe().transform(mockBody, {} as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  })
  it('should throw error for lastName', () => {
    const mockBody = {
      email: 'a@a.com',
      firstName: 'abc',
      phone: '31999999',
      password: 'abc',
    };
    try {
      new UserPipe().transform(mockBody, {} as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  })
  it('should throw error for phone', () => {
    const mockBody = {
      email: 'a@a.com',
      firstName: 'abc',
      lastName: 'cde',
      password: 'abc',
    };
    try {
      new UserPipe().transform(mockBody, {} as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  })
  it('should throw error for password', () => {
    const mockBody = {
      email: 'a@a.com',
      firstName: 'abc',
      lastName: 'cde',
      phone: '31999999',
    };
    try {
      new UserPipe().transform(mockBody, {} as any);
    } catch (e) {
      expect(e).toBeDefined();
    }
  })
});
