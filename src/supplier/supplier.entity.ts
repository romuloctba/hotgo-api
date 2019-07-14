import { Supplier } from './supplier.interface';
import { Entity, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class SupplierEntity implements Supplier {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;
}
