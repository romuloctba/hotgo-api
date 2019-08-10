import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Float } from 'type-graphql';
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

  @Column()
  @Field(type => Float)
  amount: number;

  @Column()
  @Field(type => String)
  method: string; // debit, credit

  @Column()
  @Field(type => String)
  log: JSON; // debit, credit

  @Column()
  @Field(type => String)
  status: string;

  @Column()
  @Field(type => [GraphQLJSON])
  logs: string[];
}
