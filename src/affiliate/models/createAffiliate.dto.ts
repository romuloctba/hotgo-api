import { User } from '../../user/models/user.interface';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAffiliateDto {
  @ApiModelProperty()
  user: Partial<User>;
}
