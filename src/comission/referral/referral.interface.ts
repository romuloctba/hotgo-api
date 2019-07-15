import { Product } from 'src/product/product.interface';
import { User } from 'src/user/models/user.interface';

export interface Referral {
  product: Partial<Product>;
  productId: string;
  user: Partial<User>;
  userId: string;
  amount: number;
}
