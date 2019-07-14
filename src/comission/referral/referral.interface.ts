import { Product } from 'src/product/product.interface';
import { User } from 'src/user/models/user.interface';

export interface Referral {
  product: Partial<Product>;
  user: Partial<User>;
  amount: number;
}
