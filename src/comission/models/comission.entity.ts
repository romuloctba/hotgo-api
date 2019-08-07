import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { ObjectType, Field, ID, Float, Int } from 'type-graphql';
import { SupplierEntity } from '../../supplier/supplier.entity';
import { AffiliateEntity } from '../../affiliate/affiliate.entity';
import { ProductEntity } from '../../product/models/product.entity';
import ComissionType from './comission-type.entity';

@Entity()
@ObjectType()
export class ComissionEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Field(type => String)
  @Column()
  typeId: string;

  @Field(type => ComissionType)
  type: ComissionType;

  @Field()
  @Column()
  productId: string;

  @Field(type => ProductEntity)
  product: ProductEntity;

  @Field()
  @Column()
  affiliateId: string;

  @Field(type => AffiliateEntity)
  affiliate: AffiliateEntity;

  @Field()
  @Column()
  supplierId: string;

  @Field(type => SupplierEntity)
  supplier: SupplierEntity;

  @Field(type => Int)
  @Column()
  status: number;
}
