import { PayDto } from './models/pay.dto';

/*
* Base Class for mayment Gateways
*/

export abstract class HotGoBaseGateway {
  abstract pay(payDto: PayDto);
  abstract getStatus();
}
