import * as crypto from 'crypto';
import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  BeforeInsert,
  PrimaryGeneratedColumn,
  BeforeUpdate,
  OneToOne,
  RelationId,
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from './user.interface';
import { USER_STATUS } from '../user.constants';
import { AffiliateEntity } from '../../affiliate/affiliate.entity';
import { ObjectType, Field } from 'type-graphql';

declare enum STATUS_ENUM {
  ACTIVE,
  INACTIVE,
  BLOCKED,
  REMOVED,
}

@Entity()
@ObjectType()
export class UserEntity  {

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  @ApiModelProperty()
  firstName: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  @ApiModelProperty()
  lastName: string;

  @Field({ nullable: false })
  @Column({unique: true, nullable: false})
  @ApiModelProperty({uniqueItems: true, required: true})
  email: string;

  @Column()
  @ApiModelProperty()
  password: string;

  @Column({default: 'ACTIVE'})
  @Field({ nullable: false })
  @ApiModelProperty({ enum: USER_STATUS })
  status: STATUS_ENUM;

  @CreateDateColumn()
  @Field({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: false })
  modifiedAt: Date;

  @VersionColumn()
  @ApiModelProperty()
  revision: number;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await crypto
      .createHmac('sha256', this.password)
      .digest('hex');
  }

}
