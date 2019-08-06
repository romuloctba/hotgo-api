import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from 'typeorm';
import { UserEntity } from '../../user/models/user.entity';

@ObjectType()
@Entity()
export class CustomerEntity {

  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column()
  @Field()
  userId: string;

  @Column()
  @Field(type => UserEntity)
  user: UserEntity;

}
