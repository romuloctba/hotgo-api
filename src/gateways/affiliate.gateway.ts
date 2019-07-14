import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
/*
 *  Will have the affiliates mgmt endpoints
*/

@WebSocketGateway()
export class AffiliateGateway {
  @SubscribeMessage('mesmsage')
  handleMessage(client: any, payload: any): string {
    return 'Hello AffiliateGateway!';
  }
}
