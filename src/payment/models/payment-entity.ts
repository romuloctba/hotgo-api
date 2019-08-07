import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { OrderEntity } from '../../order/models/order.entity';

@Entity()
@ObjectType()
export class PaymentEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column()
  @Field(type => String)
  orderId: string;
  @Field(type => [OrderEntity]) customer: OrderEntity;

}
