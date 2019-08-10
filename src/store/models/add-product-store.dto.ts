import { InputType, Field } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString } from 'class-validator';

@InputType()
export class AddProductToStoreDto {
  constructor(obj: Partial<AddProductToStoreDto>) {
    Object.assign(this, obj);
  }

  @Field(type => String)
  storeId: string;
  @Field(type => [String])
  productIds: string[];
}
