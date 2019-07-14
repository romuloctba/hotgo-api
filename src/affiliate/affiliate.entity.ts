import { AFFILIATE_STATUS } from './affiliate.constants';
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

  constructor(userId: string) {
    this.user = { id: userId };
  }

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @OneToOne(type => UserEntity, user => user.id)
  @Column({ unique: true })
  user: Partial<User>;

  @Column({ nullable: true })
  storeIds: [number];

  @Column({ nullable: true, default: AFFILIATE_STATUS.PENDING })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  modifiedAt: Date;
  @VersionColumn()
  revision: number;
}
