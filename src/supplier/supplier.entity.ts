import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserEntity } from '../user/models/user.entity';

@Entity()
@ObjectType()
export class SupplierEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column({unique: true, nullable: false})
  @ApiModelProperty({uniqueItems: true, required: true})
  @Field({ nullable: false })
  userId: string;

  @Column()
  @Field(type => UserEntity)
  user: UserEntity;

  @Column()
  @ApiModelProperty()
  @Field(type => [String])
  stores: [string];
}
