import { InputType, Field } from 'type-graphql';
import { ProductEntity } from '../../product/models/product.entity';
import { PaymentEntity } from '../../payment/models/payment.entity';
import { CustomerEntity } from '../../customer/models/customer.entity';

@InputType()
export class CreateOrderDto {
  @Field(type => [String])
  productIds: [string];

  @Field(type => [String], { nullable: true })
  comissionIds: [string];

  @Field(type => String)
  customerId: string;

  @Field(type => String, { nullable: true })
  paymentId?: string;
}
