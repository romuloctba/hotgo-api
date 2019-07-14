import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { AffiliateService } from './affiliate.service';

const ERROR_MESSAGES = {
  MISSING_NAME: 'Missing name',
  MISSING_USER_ID: 'Missing user Id',
  USER_INVALID: 'User invalid',
};

@Injectable()
export class AffiliatePipe implements PipeTransform {
  constructor(private readonly affiliateService: AffiliateService) {}
  async transform(value: any, metadata: ArgumentMetadata) {

    // if (!value.name) {
    //   throw new BadRequestException(ERROR_MESSAGES.MISSING_NAME);
    // }
    console.log('value is ', value);
    // if (!value.user || !value.user.id) {
    //   throw new BadRequestException(ERROR_MESSAGES.MISSING_USER_ID);
    // }

    const isValidUser = true; // await this.affiliateService.getUserById(value.user.id);
    if (!isValidUser) {
      throw new BadRequestException(ERROR_MESSAGES.USER_INVALID);
    }
    return value;
  }
}
