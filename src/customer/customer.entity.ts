import { Customer } from './customer.interface';
import { ObjectType, Field } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm';
import { UserEntity } from '../user/models/user.entity';

@ObjectType()
@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  id: string;

  @Column()
  @Field(type => UserEntity)
  userId: string;
}
