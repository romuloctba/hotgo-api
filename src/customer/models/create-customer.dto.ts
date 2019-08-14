import { InputType, Field } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString } from 'class-validator';
import { Column } from 'typeorm';

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

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  firstName: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  lastName: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  documentType: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  documentNumber: string;

}
