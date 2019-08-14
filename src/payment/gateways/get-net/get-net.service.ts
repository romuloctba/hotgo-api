import { Injectable, HttpService } from '@nestjs/common';
import { HotGoBaseGateway } from '../base/base-gateway.class';
import { GetNetCardDto } from './models/card.dto';
import { GETNET_ENDPOINTS, CREDENTIALS } from './config.class';
import { GetNetPayCreditDto } from './models/pay-credit.dto';
import { AdjustPReAuthTransactionDto } from './models/adjust-preauth-transaction.dto';

@Injectable()
export class GetNetService implements HotGoBaseGateway {
  authorizationHeaders = {
    seller_id: '',
    Authorization: '',
  };
  requestOptions = { headers: this.authorizationHeaders };

  constructor(
    private readonly httpService: HttpService,
  ) {}

  getBasicToken() {
    const basicToken = new Buffer(`${CREDENTIALS.CLIENT_ID}:${CREDENTIALS.CLIENT_SECRET}`).toString('base64');
    return basicToken;
  }

  getBasicAuthOptions() {
    const basicToken = this.getBasicToken();
    const options = { headers: `Authorization Basic ${basicToken}` };
    return options;
  }

  async prepareAuthorizationHeader() {
    const authTokenData = {
      scope: CREDENTIALS.AUTH_TOKEN_SCOPE,
      grant_type: CREDENTIALS.AUTH_TOKEN_GRANT_TYPE,
    };

    const options = this.getBasicAuthOptions();
    const token =  await this.httpService
      .post(GETNET_ENDPOINTS.AUTH_TOKEN, authTokenData, options)
      .toPromise();

    this.setAuthorizationHeader(token.data.access_token);
    return null;
  }

  async getCardToken(cardDto: GetNetCardDto, customerId: string) {
    const body = {
      card_number: cardDto.number,
      customer_id: customerId,
    };
    const result = await this.httpService
      .post(GETNET_ENDPOINTS.CARD_TOKEN, body, this.requestOptions)
      .toPromise();

    return result.data.number_token;
  }

  setAuthorizationHeader(token: string) {
    if (!token) {
      throw new Error('Invalid Token for Authorization');
    }

    this.authorizationHeaders.Authorization = `Bearer ${token}`;
  }

  async pay(payDto: any, dictionary?: { [targetKey: string]: string }) {
    switch (payDto.method) {
      case 'credit':
        return this.payWithCredit(new GetNetPayCreditDto(payDto));
      case 'debit':
      default:
      break;
    }
  }

  async payWithCredit(payDto: GetNetPayCreditDto) {
    const body = this.createNewCreditTransaction(payDto);
    const result = await this.httpService
      .post(GETNET_ENDPOINTS.CREDIT_PAYMENT, body, this.requestOptions)
      .toPromise();
    return result.data;
  }

  async createNewCreditTransaction(payDto: GetNetPayCreditDto) {
    const body = new GetNetPayCreditDto();
    const result = await this.httpService.post(GETNET_ENDPOINTS.CREDIT_PAYMENT, body, this.requestOptions)
      .toPromise();
    return result;
  }

  async creditPaymentConfirm(getNetPaymentId: string, amount?: string) {
    const body = {} as { amount?: string };
    if (amount) {
      body.amount = amount;
    }

    const endpoint = GETNET_ENDPOINTS.CREDIT_PAYMENT_CONFIRM
      .replace('{payment_id}', getNetPaymentId);
    const result = await this.httpService
      .post(endpoint, body, this.requestOptions)
      .toPromise();

    return result.data;
  }

  async finalizeAuthCreditPayment(payerAuthResponse: string) {
    /*tslint:disable*/
    const body = { 'payer_authentication_response': payerAuthResponse };
    /*tslint:enable*/
    const result = await this.httpService
      .post(GETNET_ENDPOINTS.CREDIT_PAYMENT_FINALIZE, body, this.requestOptions)
      .toPromise();

    return result;
  }

  async adjustPreAuthTransaction(paymentId: string, dto: AdjustPReAuthTransactionDto) {
    const endpoint = GETNET_ENDPOINTS.CREDIT_PAYMENT_ADJUSTMENT.replace('{payment_id}', paymentId);
    const result = await this.httpService
      .post(endpoint, dto, this.requestOptions)
      .toPromise();

    return result;
  }
  getStatus() {
    const status = '';
    return status;
  }

  async cancelCreditTransaction(paymentId: string) {
    const endpoint = GETNET_ENDPOINTS.CREDIT_PAYMENT_CANCEL.replace('{payment_id}', paymentId);
    const result = await this.httpService
      .post(endpoint, {}, this.requestOptions)
      .toPromise();

    return result;
  }
}
