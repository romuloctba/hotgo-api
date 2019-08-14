import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@Entity()
@ObjectType()
export class AddressEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;
  @Column(type => String)
  @Field()
  userId: string;
  @Column(type => String)
  @Field()
  street: string;
  @Column(type => String)
  @Field()
  number: string;
  @Column({ nullable: true })
  @Field()
  complement: string;
  @Column(type => String)
  @Field()
  district: string;
  @Column(type => String)
  @Field()
  city: string;
  @Column(type => String)
  @Field()
  state: string;
  @Column(type => String)
  @Field()
  country: string;
  @Column(type => String)
  @Field()
  postalCode: string;
}
