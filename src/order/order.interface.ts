import { Product } from 'src/product/product.interface';
import { Customer } from 'src/customer/customer.interface';
import { Supplier } from 'src/supplier/supplier.interface';

export interface Order {
  id: string;
  products: [Partial<Product>];
  productIds: [string];
  customerId: string;
  supplierId: string;
  customer: Partial<Customer>;
  supplier: Partial<Supplier>;
}
