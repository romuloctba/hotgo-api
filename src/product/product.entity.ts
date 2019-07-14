import {
  Entity,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
  Column,
} from 'typeorm';
import { Supplier } from 'src/supplier/supplier.interface';
import { Product } from './product.interface';

@Entity()
export class ProductEntity implements Product {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  categories: string[];

  @Column()
  tags: string[];

  @Column()
  supplier: Supplier;
}
