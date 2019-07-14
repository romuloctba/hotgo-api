import { Affiliate } from 'src/affiliate/affiliate.interface';
import { Supplier } from 'src/supplier/supplier.interface';
import { Referral } from './referral/referral.interface';

export interface Comission {
  id: string;
  amount: Referral;
  affiliate: Partial<Affiliate>;
  supplier: Partial<Supplier>;
  status: number;
}
