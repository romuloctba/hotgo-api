import { Customer } from './customer.interface';
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { User } from 'src/user/models/user.interface';

@Entity()
export class CustomerEntity implements Customer {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  user: Partial<User>;
  @Column()
  userId: string;
}
