import {
  Entity,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  Column,
  ObjectID,
} from 'typeorm';
import { Supplier } from 'src/supplier/supplier.interface';
import { ObjectType, ID, Field, Float } from 'type-graphql';
import { SupplierEntity } from '../../supplier/supplier.entity';
import Price from './price.class';

@ObjectType()
@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @Field(type => ID)
  id: ObjectID;

  @Field()
  @Column()
  name: string;

  @Field(type => [String])
  @Column()
  categories: string[];

  @Field(type => [String])
  @Column()
  tags: string[];

  @Field()
  @Column()
  supplierId: string;

  @Column()
  @Field(type => SupplierEntity)
  supplier: Supplier;

  @Column()
  @Field(type => Price)
  price: Price;
}
