import { Entity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn, VersionColumn, Column } from 'typeorm';
import { ObjectType, Field, ID, Int, Float } from 'type-graphql';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
@ObjectType()
export default class ComissionTypeEntity {
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @ApiModelProperty()
  @Field(type => Float, { nullable: false })
  @Column()
  amount: number; // Float

  @Field({ nullable: true })
  @Column()
  title: string;

  @Field({ nullable: false })
  @Column()
  productId: string;

  @Field(type => Int)
  @Column()
  status: number;

  @CreateDateColumn()
  @Field({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn()
  @Field({ nullable: false })
  modifiedAt: Date;

  @VersionColumn()
  @ApiModelProperty()
  revision: number;
}
