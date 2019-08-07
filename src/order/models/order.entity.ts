import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ProductEntity } from '../../product/models/product.entity';
import { CustomerEntity } from '../../customer/models/customer.entity';
import { ObjectType, Field, ID, Float } from 'type-graphql';
import { SupplierEntity } from '../../supplier/supplier.entity';
import { ComissionEntity } from '../../comission/models/comission.entity';
import { PaymentEntity } from '../../payment/models/payment-entity';

@Entity()
@ObjectType()
export class OrderEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column()
  @Field(type => [String])
  productIds: [string];
  @Field(type => [ProductEntity]) products: [ProductEntity];

  @Column()
  @Field(type => [String])
  comissionIds: [string];
  @Field(type => [ComissionEntity]) comission: [ComissionEntity];

  @Column()
  @Field(type => String)
  customerId: string;
  @Field(type => [CustomerEntity]) customer: CustomerEntity;

  @Column()
  @Field(type => String)
  supplierId: string;
  @Field(type => SupplierEntity) supplier: SupplierEntity;

  @Column()
  @Field(type => String)
  paymentId: string;
  @Field(type => PaymentEntity) payment: PaymentEntity;
}
