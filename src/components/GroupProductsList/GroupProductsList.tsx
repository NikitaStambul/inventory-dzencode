import { Product } from '@/types/Product';
import styles from './GroupProductsList.module.scss';
import GroupProductItem from '../GroupProductItem/GroupProductItem';

export default function GroupProductsList({
  products,
  orderId,
}: {
  products: Product[];
  orderId: number;
}) {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <GroupProductItem
          key={product.id}
          product={product}
          orderId={orderId}
        />
      ))}
    </div>
  );
}
