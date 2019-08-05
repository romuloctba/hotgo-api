import { InputType, Field } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString } from 'class-validator';

@InputType()
export class CreateCustomerDto {
  constructor(obj: Partial<CreateCustomerDto>) {
    Object.assign(this, obj);
  }

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  userId: string;
}
