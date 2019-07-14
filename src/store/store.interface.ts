import { User } from '../user/models/user.interface';
import { Theme } from './theme/theme.interface';

export interface Store {
  id: string;
  name: string;
  supplier: Partial<User>;
  theme: Partial<Theme>;
}
