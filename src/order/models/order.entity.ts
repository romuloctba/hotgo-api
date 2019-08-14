import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ProductEntity } from '../../product/models/product.entity';
import { CustomerEntity } from '../../customer/models/customer.entity';
import { ObjectType, Field, ID, Float } from 'type-graphql';
import { SupplierEntity } from '../../supplier/supplier.entity';
import { ComissionEntity } from '../../comission/models/comission.entity';
import { PaymentEntity } from '../../payment/models/payment.entity';
import { ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';

@Entity()
@ObjectType()
export class OrderEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column()
  @ValidateNested({ each: true })
  @Field(type => [String])
  @ApiModelProperty()
  productIds: string[];
  @Field(type => [ProductEntity]) products: ProductEntity[];
  @Column(type => GraphQLJSON)
  @Field(type => GraphQLJSON)
  @ApiModelProperty()
  productsSnapshot: GraphQLJSON;

  @Column()
  @ValidateNested({ each: true })
  @Field(type => [String], { nullable: true})
  @ApiModelProperty()
  comissionIds?: string[];
  @Field(type => [ComissionEntity], { nullable: true}) comissions?: ComissionEntity[];

  @Column()
  @Field(type => String)
  @ApiModelProperty()
  customerId: string;
  @Field(type => CustomerEntity) customer: CustomerEntity;

  @Column()
  @Field(type => String, { nullable: true })
  @ApiModelProperty()
  paymentId?: string; // payment.findByOrderId( ) returns [PaymentEntity]
  @Field(type => PaymentEntity, { nullable: true }) payment?: PaymentEntity;

  @CreateDateColumn()
  @Field({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: false })
  modifiedAt: Date;

  @VersionColumn()
  revision: number;

}
