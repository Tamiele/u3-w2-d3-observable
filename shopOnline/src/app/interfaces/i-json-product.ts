import { iproducts } from './i-product';

export interface iJsonProduct {
  products: iproducts[];
  total: number;
  skip: number;
  limit: number;
}
