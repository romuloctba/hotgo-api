import { Test, TestingModule } from '@nestjs/testing';
import { SupplierController } from './supplier.controller';
import { of } from 'rxjs';
import { SupplierService } from '../supplier/supplier.service';
import { define } from 'mime';
import { EventBus } from '@nestjs/cqrs';
import { CreateStoreCommand } from '../store/commands/create-store.command';

describe('Supplier Controller', () => {
  let controller: SupplierController;
  let mockSupplierService: SupplierService;
  let mockEventBus: EventBus;
  const returnFindOne = dataId => dataId ? ({ id: dataId }) : false;
  beforeEach(async () => {
    mockSupplierService = {
      create: jasmine.createSpy('create'),
      findOne: jasmine.createSpy('findOne').and.callFake(returnFindOne),
    } as any;
    mockEventBus = {
      publish: jasmine.createSpy('publish'),
    } as any;
    controller = new SupplierController(mockSupplierService, mockEventBus);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register new supplier from user', async () => {
    const testId = 'testid';
    const requestMock = {
      user: { id: testId },
    };
    await controller.createSupplier(requestMock);
    expect(mockSupplierService.create).toHaveBeenCalled();
  });

  describe('Method: createStore ', () => {
    it('should publish a CreateStoreCommand ', async () => {
      const id = 'as';
      const name = 'as';
      const req = { user: { id: 'as' }, body: { name, id } };
      const result = await controller.createStore(req);
      const expectedCommand = new CreateStoreCommand(id, name, '23');
      expect(mockEventBus.publish).toHaveBeenCalledWith(expectedCommand);
    });
  });
});
