export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}

interface Guarantee {
  start: string;
  end: string;
}

interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    serialNumber: 1000084135,
    isNew: 1,
    photo: 'monitor.png',
    title: 'Hewlett-Packard Monitor HP X27q (2V7U5AA)',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1000084136,
    isNew: 2,
    photo: 'keyboard.webp',
    title: 'Apple Magic Keyboard with Touch ID for Mac models with Apple silicon (MK293)',
    type: 'Keyboards',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
];
