import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ProductService } from '../../product/product.service';
import { ValidationError } from 'apollo-server-core';

@Injectable()
export class ProductIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly productService: ProductService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }

    if (value.productId) {
      const product = await this.productService.findById(value.productId);
      if (product && product.id.toString() === value.productId) {
        return value;
      }
      throw new ValidationError('Invalid productId');
    }

    return value;
  }
}
