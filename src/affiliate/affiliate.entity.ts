import {
  Entity,
  ObjectIdColumn,
  OneToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/models/user.interface';
import { Affiliate } from './affiliate.interface';
import { UserEntity } from '../user/models/user.entity';

declare enum STATUS_ENUM {
  ACTIVE,
  INACTIVE,
  BLOCKED,
  REMOVED,
}

@Entity()
export class AffiliateEntity implements Affiliate {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;
  @OneToOne(type => UserEntity)
  @Column()
  user: Partial<User>;
  @Column()
  storeIds: [number];
  @Column()
  status: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  modifiedAt: Date;
  @VersionColumn()
  revision: number;
}
