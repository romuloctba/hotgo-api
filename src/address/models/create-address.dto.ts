import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateAddressDto {
  @Field()
  userId: string;
  @Field()
  street: string;
  @Field()
  number: string;
  @Field()
  complement: string;
  @Field()
  district: string;
  @Field()
  city: string;
  @Field()
  state: string;
  @Field()
  country: string;
  @Field()
  postalCode: string;
}
