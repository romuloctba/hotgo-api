import { Supplier } from './supplier.interface';
import { Entity, PrimaryGeneratedColumn, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class SupplierEntity implements Supplier {
  constructor(userId: string) {
    this.userId = userId;
  }
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  storeIds: [string];
}
