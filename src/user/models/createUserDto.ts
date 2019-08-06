import { ApiModelProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsDefined, IsString, Length, Matches } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateUserDto {

  constructor(obj: Partial<CreateUserDto>) {
    Object.assign(this, obj);
  }

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  email: string;

  @ApiModelProperty()
  @Length(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)
  @IsDefined()
  @IsString()
  @Field()
  password: string;

  @ApiModelProperty({ required: false })
  @Field()
  phone: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  @Field()
  lastName: string;
}
