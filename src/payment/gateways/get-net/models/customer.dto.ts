import { GetNetAddressDto } from './adress.dto';

// tslint:disable:variable-name
export class GetNetCustomerDto extends GetNetAddressDto {
  customer_id: string;
  document_type: string;
  document_number: string;
}
// tslint:enable:variable-name
