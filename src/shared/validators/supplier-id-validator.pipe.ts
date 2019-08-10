import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { SupplierService } from '../../supplier/supplier.service';
import { ValidationError } from 'apollo-server-core';

@Injectable()
export class SupplierIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly supplierService: SupplierService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }

    if (value.supplierId) {
      const supplier = await this.supplierService.findById(value.supplierId);
      if (supplier && supplier.id.toString() === value.supplierId) {
        return value;
      }
      throw new ValidationError('Invalid supplierId');
    }

    return value;
  }
}
