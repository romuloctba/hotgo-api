import { InputType, Field, Float } from 'type-graphql';

@InputType()
export class CreatePaymentDto {
  @Field(type => String)
  orderId: string;

  @Field(type => String)
  addressId: string;

  @Field(type => Float)
  amount: number;

  @Field(type => String)
  method: string; // debit, credit

  @Field(type => String)
  log: JSON; // debit, credit

  @Field(type => String)
  status: string;

  @Field(type => String)
  logs: string[];
}