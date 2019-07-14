import { Order } from './order.interface';
import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { Product } from '../product/product.interface';
import { Customer } from '../customer/customer.interface';
import { Supplier } from '../supplier/supplier.interface';

@Entity()
export class OrderEntity implements Order {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;
  @Column()
  products: [Partial<Product>];
  @Column()
  customer: Partial<Customer>;
  @Column()
  supplier: Partial<Supplier>;
}