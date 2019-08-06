import { InputType, Field, Float } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString, IsNumber, IsArray } from 'class-validator';

@InputType()
export class CreateProductDto {
  constructor(obj: Partial<CreateProductDto>) {
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
  @IsNotEmpty()
  @IsDefined()
  @IsString({ each: true })
  @Field(type => [String])
  categories: string[];

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString({ each: true })
  @Field(type => [String])
  tags: string[];

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @Field(type => Float)
  price: number;

  // @ApiModelProperty()
  // @IsNotEmpty()
  // @IsDefined()
  // @IsArray()
  // @Field(type => Float)
  // promoPrice: [];
}
