export class PayDto {
  method: string;
  orderId: string;
  amount: number;
  productIds: string[];
  customerId: string;
  addressId: string;
  paymentId?: string; // payment.findByOrderId( ) returns [PaymentEntity]
}
