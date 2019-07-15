import { Affiliate } from 'src/affiliate/affiliate.interface';
import { Supplier } from 'src/supplier/supplier.interface';
import { Referral } from './referral/referral.interface';

export interface Comission {
  id: string;
  amount: Referral;
  affiliate: Partial<Affiliate>;
  affiliateId: string;
  supplier: Partial<Supplier>;
  supplierId: string;
  status: number;
}
