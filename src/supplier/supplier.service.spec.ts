import { Test, TestingModule } from '@nestjs/testing';
import { SupplierService } from './supplier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './supplier.entity';
import { StoreModule } from '../store/store.module';
import { CommandHandlers } from '../supplier/supplier.module';

describe('SupplierService', () => {
  let service: SupplierService;
  let mockSupplierRepository: any;
  beforeEach(async () => {
    mockSupplierRepository = {
      save: jasmine.createSpy('save'),
      findOne: jasmine.createSpy('findOne'),
    } as any;
    service = new SupplierService(mockSupplierRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('method: create ', () => {
    it('should call respository save', () => {
      const testId = '12';
      service.create(testId);
      expect(mockSupplierRepository.save).toHaveBeenCalled();
    });
  });

  describe('method: findOne ', () => {
    it('should call respository findOne', () => {
      const testId = '12';
      service.findOne(testId);
      expect(mockSupplierRepository.findOne).toHaveBeenCalled();
    });
  });
});
