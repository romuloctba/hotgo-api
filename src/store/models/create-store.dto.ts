import { InputType, Field } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString } from 'class-validator';

@InputType()
export class CreateStoreDto {
  constructor(obj: Partial<CreateStoreDto>) {
    Object.assign(this, obj);
  }

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  supplierId: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  name: string;

  @ApiModelProperty()
  @IsString()
  @Field()
  themeId: string;
}
