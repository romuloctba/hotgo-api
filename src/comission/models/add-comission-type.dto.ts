import { InputType, Field } from 'type-graphql';

@InputType()
export default class AddComissionTypeDto {
  @Field()
  title: string;
  @Field()
  amount: number; // Float
  @Field()
  productId: string;
  @Field()
  status: number;
}
