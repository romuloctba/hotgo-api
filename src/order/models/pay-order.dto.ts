import { InputType, Field } from 'type-graphql';
import { ProductEntity } from '../../product/models/product.entity';
import { PaymentEntity } from '../../payment/models/payment.entity';
import { CustomerEntity } from '../../customer/models/customer.entity';
import { CreatePaymentDto } from '../../payment/models/create-payment.dto';

@InputType()
export class PayOrderDto {
  @Field()
  orderId: string;

  @Field(type => CreatePaymentDto)
  payment: CreatePaymentDto;
}
