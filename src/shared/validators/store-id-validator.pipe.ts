import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { StoreService } from '../../store/store.service';
import { ValidationError } from 'apollo-server-core';

@Injectable()
export class StoreIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly storeService: StoreService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }

    if (value.storeId) {
      const store = await this.storeService.findById(value.storeId);
      if (store && store.id.toString() === value.storeId) {
        return value;
      }
      throw new ValidationError('Invalid storeId');
    }

    return value;
  }
}
