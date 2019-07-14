import { ApiModelProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsDefined, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  email: string;

  @ApiModelProperty()
  @Length(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)
  @IsDefined()
  @IsString()
  password: string;

  @ApiModelProperty({ required: false })
  phone: string;

  @ApiModelProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsString()
  lastName: string;
}
