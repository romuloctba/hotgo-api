import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ERROR_MESSAGES } from './user.constants';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    /*  Set Default values to new User */
    if (!value.email) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_EMAIL);
    }
    //
    if (!value.firstName) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_FIRST_NAME);
    }
    if (!value.lastName) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_LAST_NAME);
    }
    if (!value.phone) {
      throw new BadRequestException(ERROR_MESSAGES.MISSING_PHONE);
    }

    if (!value.password) {
      // value.password = '1234';
      throw new BadRequestException(ERROR_MESSAGES.MISSING_PASSWORD);
    }

    value.userStatus = 'ACTIVE';

    return value;
  }
}
