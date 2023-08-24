import { Order } from '@/types/Order';
import axios from 'axios';

interface OrdersResponse {
  data: Order[];
}

export function getProducts(): Promise<OrdersResponse> {
  return axios.get('/api/orders');
}
