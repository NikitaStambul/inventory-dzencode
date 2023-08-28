import { Product } from '@/types/Product';
import styles from './GroupProductsList.module.scss';
import GroupProductItem from '../GroupProductItem/GroupProductItem';
import { useAppDispatch } from '@/store/hooks';
import { unselectOrder } from '@/store/slices/ordersSlice';

export default function GroupProductsList({
  products,
  orderId,
}: {
  products: Product[];
  orderId: number;
}) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.list + ' pb-4 w-100'}>
      {products.map((product) => (
        <GroupProductItem
          key={product.id}
          product={product}
          orderId={orderId}
        />
      ))}
      <button
        onClick={() => {
          dispatch(unselectOrder());
        }}
        className={styles.list__close + ' btn btn-light position-absolute'}
      >
        x
      </button>
    </div>
  );
}
