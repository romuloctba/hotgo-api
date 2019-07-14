import { Comission } from './comission.interface';
import { Entity, PrimaryGeneratedColumn, Column, ObjectIdColumn } from 'typeorm';
import { Affiliate } from 'src/affiliate/affiliate.interface';
import { Supplier } from '../supplier/supplier.interface';
import { Referral } from './referral/referral.interface';

@Entity()
export class ComissionEntity implements Comission {
  @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  amount: Referral;
  @Column()
  affiliate: Partial<Affiliate>;
  @Column()
  supplier: Partial<Supplier>;
  @Column()
  status: number;
}
