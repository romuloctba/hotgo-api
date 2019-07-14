import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

/*
* This will contain seller dashboard
*/

@WebSocketGateway()
export class SellerGateway {
  @SubscribeMessage('medassage')
  handleMessage(client: any, payload: any): string {
    return 'Hello SellerGateway!';
  }
}
