import {
  Entity,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  Column,
  ObjectID,
} from 'typeorm';
import { Supplier } from '../../supplier/supplier.interface';
import { ObjectType, ID, Field, Float } from 'type-graphql';
import { SupplierEntity } from '../../supplier/supplier.entity';
import Price from './price.class';
import ComissionTypeEntity from '../../comission/models/comission-type.entity';

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

  @Column({ nullable: true })
  @Field(type => [String], { nullable: true })
  comissionTypeIds: string[];

  @Field(type => [ComissionTypeEntity], { nullable: true })
  comissionType: ComissionTypeEntity[];
}
