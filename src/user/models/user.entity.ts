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
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { User } from './user.interface';
import { USER_STATUS } from '../user.constants';

declare enum STATUS_ENUM {
  ACTIVE,
  INACTIVE,
  BLOCKED,
  REMOVED,
}

@Entity()
export class UserEntity  {

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  firstName: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  lastName: string;

  @Column({unique: true, nullable: false})
  @ApiModelProperty({uniqueItems: true, required: true})
  email: string;

  @Column()
  @ApiModelProperty()
  password: string;

  @Column({default: 'ACTIVE'})
  @ApiModelProperty({ enum: USER_STATUS })
  status: STATUS_ENUM;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
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
