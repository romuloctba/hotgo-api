import { ValidateNested, IsDefined, IsString, IsNotEmpty } from 'class-validator';

// tslint:disable:variable-name
export class GetNetAddressDto {
  @ValidateNested() @IsDefined()
  billing_address: {
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
  };
  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsNotEmpty()
  last_name: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  phone_number: string;
}
// tslint:enable:variable-name
