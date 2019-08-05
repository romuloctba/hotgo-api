import { Store } from './store.interface';
import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { User } from '../user/models/user.interface';
import { Theme } from './theme/theme.interface';
import { ObjectType, ID, Field } from 'type-graphql';
import { SupplierEntity } from '../supplier/supplier.entity';

@Entity()
@ObjectType()
export class StoreEntity {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @Field(type => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  supplierId: string;

  @Column()
  @Field(type => SupplierEntity)
  supplier: SupplierEntity;

  @Column()
  @Field()
  themeId: string;

  @Column()
  theme: Partial<Theme>;
}
