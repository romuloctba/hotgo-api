import { User } from '../user/models/user.interface';

export interface Customer {
  id: string;
  user: Partial<User>;
  userId: string;
}
