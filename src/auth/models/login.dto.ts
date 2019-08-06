import { IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export default class LoginDto {
  @IsString()
  @IsNotEmpty()
  @Field()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
}
