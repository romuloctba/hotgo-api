import { InputType, Field } from 'type-graphql';

@InputType()
export default class AddComissionDto {
  @Field()
  typeId: string;
  @Field()
  productId: string;
  @Field()
  affiliateId: string;
  @Field()
  supplierId: string;
  @Field()
  status: number;
}
