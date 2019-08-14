import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID } from 'typeorm';
import { UserEntity } from '../../user/models/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

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

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  firstName: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  lastName: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  documentType: string;

  @Column({ nullable: false })
  @ApiModelProperty()
  @Field()
  documentNumber: string;

}
