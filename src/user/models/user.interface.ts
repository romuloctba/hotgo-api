
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: string;
  createdAt: Date;
  modifiedAt: Date;
  revision: number;
}