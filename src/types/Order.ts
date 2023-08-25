import { Product, mockProducts } from './Product';

export interface Order {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Product[];
}

export const mockOrders: Order[] = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: [mockProducts[0], mockProducts[1]],
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-30 16:29:13',
    description: 'desc',
    products: [mockProducts[1]],
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-31 09:12:37',
    description: 'desc',
    products: [mockProducts[0]],
  },
];
