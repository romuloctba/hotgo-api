import { User } from '../user/models/user.interface';
import { UserEntity } from '../user/models/user.entity';

export interface Affiliate {
  id: string;
  userId: string,
  storeIds: [number];
  status: string;
  createdAt: Date;
  modifiedAt: Date;
  revision: number;
}
