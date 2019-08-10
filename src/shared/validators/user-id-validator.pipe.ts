import { ArgumentMetadata, Injectable, PipeTransform, Inject } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { ValidationError } from 'apollo-server-core';
import { Entity, BaseEntity } from 'typeorm';
import { isEntityName } from 'typescript';
import { CustomerEntity } from '../../customer/models/customer.entity';

@Injectable()
export class UserIdValidatorPipe implements PipeTransform {
  constructor(
    private readonly userService: UserService,
  ) {}
  async transform(value: any, meta: ArgumentMetadata) {
    if (meta.type !== 'body') {
      return value;
    }
    if (value.userId) {
      const user = await this.userService.findById(value.userId);
      if (user && user.id.toString() === value.userId) {
        return value;
      }
      throw new ValidationError(`Invalid userId ${value.userId}`);
    }

    return value;
  }
}
