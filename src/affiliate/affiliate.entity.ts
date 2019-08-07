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
  RelationId,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/models/user.interface';
import { Affiliate } from './affiliate.interface';
import { UserEntity } from '../user/models/user.entity';
import { ObjectType, Field, ID } from 'type-graphql';

declare enum STATUS_ENUM {
  ACTIVE,
  INACTIVE,
  BLOCKED,
  REMOVED,
}

@Entity()
@ObjectType()
export class AffiliateEntity {

  constructor(userId: string) {
    this.userId = userId;
  }

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Field()
  @Column({ unique: true })
  userId: string;

  @Field(type => [String])
  @Column({ nullable: true })
  storeIds: string[];

  @Field()
  @Column({ nullable: true, default: AFFILIATE_STATUS.PENDING })
  status: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  modifiedAt: Date;

  @Field()
  @VersionColumn()
  revision: number;
}
