import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

/*
* This contains endpoints for shoping, produc listing, checkout
*/

@WebSocketGateway()
export class ShoppingGateway {
  @SubscribeMessage('mesaasage')
  handleMessage(client: any, payload: any): string {
    return 'Hello ShoppingGateway!';
  }
}
