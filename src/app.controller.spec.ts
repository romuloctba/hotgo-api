import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const mockAuthService = {} as any;
    const mockUserService = {} as any;

    appController = new AppController(mockAuthService, mockUserService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  })
});
