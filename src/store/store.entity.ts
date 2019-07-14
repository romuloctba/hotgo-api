import { Store } from './store.interface';
import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { User } from '../user/models/user.interface';
import { Theme } from './theme/theme.interface';

@Entity()
export class StoreEntity implements Store {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  supplier: Partial<User>;

  @Column()
  theme: Partial<Theme>;
}
