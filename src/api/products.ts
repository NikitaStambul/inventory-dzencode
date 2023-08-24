import { Product } from '@/types/Product';
import axios from 'axios';

interface ProductsResponse {
  data: Product[];
}

export function getProducts(): Promise<ProductsResponse> {
  return axios.get('/api/products');
}
