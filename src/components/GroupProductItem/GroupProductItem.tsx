import { Product } from '@/types/Product';
import styles from './GroupProductItem.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { Icons } from '../Icons';
import { useAppDispatch } from '@/store/hooks';
import { removeProductFromOrder } from '@/store/slices/ordersSlice';

export default function GroupProductItem({
  product,
  orderId,
}: {
  product: Product;
  orderId: number;
}) {
  const dispatch = useAppDispatch();
  const isAvailable = product.isNew === 1;

  const deleteHandler = () => {
    dispatch(removeProductFromOrder({ productId: product.id, orderId }));
  };

  return (
    <div className={styles.item + ' border-top border-bottom'}>
      <span
        className={classNames(styles.item__statusPoint, {
          [styles['item__statusPoint--available']]: isAvailable,
        })}
      />

      <Image
        height={40}
        width={60}
        src={'/' + product.photo}
        alt={product.title + ' image'}
        style={{ objectFit: 'contain' }}
      />

      <div className={styles.item__info}>
        <h5 className={styles.item__title}>{product.title}</h5>
        <p className={styles.item__serial}>{product.serialNumber}</p>
      </div>

      <div
        className={classNames(styles.item__status, {
          [styles['item__status--available']]: isAvailable,
        })}
      >
        {isAvailable ? 'available' : 'maintaining'}
      </div>

      <button type="button" className="btn btn-light" onClick={deleteHandler}>
        {<Icons.trash width={24} height={24} />}
      </button>
    </div>
  );
}
