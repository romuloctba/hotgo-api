import { GetNetCreditInfoDto } from './credit-info.dto';
import { GetNetCustomerDto } from './customer.dto';
import { GetNetAddressDto } from './adress.dto';
import { IsNumber, IsNotEmpty } from 'class-validator';
// tslint:disable:variable-name
const resolvePath = (object, path, defaultValue) => path
        .split('.')
        .reduce((o, p) => o ? o[p] : defaultValue, object)

export class GetNetPayCreditDto {
  constructor(
    obj?: Partial<GetNetPayCreditDto> | any,
  ) {
    Object.assign(this, obj);
  }
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  credit: GetNetCreditInfoDto;

  order: {
    order_id: string;
    sales_tax: number;
    product_type: string;
  };

  @IsNotEmpty()
  customer: GetNetCustomerDto;
  @IsNotEmpty()
  seller_id: string; // uuidv4;
  @IsNotEmpty()
  currency: string;
  device?: {
    ip_address: string; // ipv4
    device_id: string;
  };
  shippings: GetNetAddressDto[];
}
// tslint:enable:variable-name
