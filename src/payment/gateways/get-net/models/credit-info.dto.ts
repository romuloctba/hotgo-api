import { GetNetCardDto } from './card.dto';

// tslint:disable:variable-name
export class GetNetCreditInfoDto {
    delayed: boolean;
    save_card_data: boolean;
    transaction_type: string;
    number_installments: number;
    card: GetNetCardDto;
    authenticated: boolean;
    pre_authorization: boolean;
    soft_descriptor: string;
    dynamic_mcc: number;
}
// tslint:enable:variable-name
