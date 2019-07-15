import { Supplier } from 'src/supplier/supplier.interface';

export interface Product {
  id: string;
  name: string;
  categories: string[];
  tags: string[];
  supplierId: string;
  supplier: Supplier;
}
