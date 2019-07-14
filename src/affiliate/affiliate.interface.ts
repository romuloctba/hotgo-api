import { User } from '../user/models/user.interface';

export interface Affiliate {
  id: string;
  user: Partial<User>;
  storeIds: [number];
  status: string;
  createdAt: Date;
  modifiedAt: Date;
  revision: number;
}
