import { Product } from '@/types/Product';
import styles from './ProductItem.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useAppDispatch } from '@/store/hooks';
import { setDeleteProduct } from '@/store/slices/deleteProductModalSlice';
import { Icons } from '@/components/Icons';

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const isAvailable = product.isNew === 1;

  const deleteHandler = () => {
    dispatch(setDeleteProduct(product));
  };

  return (
    <div className={styles.item}>
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

      <div className={styles.item__guarantee}>
        <div className={styles.item__guaranteeStart}>
          {product.guarantee.start}
        </div>
        <div className={styles.item__guaranteeEnd}>{product.guarantee.end}</div>
      </div>

      <div className={styles.item__state}>
        {isAvailable ? 'New' : 'Second-hand'}
      </div>

      <div className={styles.item__prices}>
        <div className={styles.item__usd}>{product.price[0].value}$</div>
        <div className={styles.item__uah}>{product.price[1].value}UAH</div>
      </div>

      <div className={styles.item__typography}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>
      <div className={styles.item__typography}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>
      <div className={styles.item__typography}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>

      <button type="button" className="btn btn-light" onClick={deleteHandler}>
        {<Icons.trash width={24} height={24} />}
      </button>
    </div>
  );
}
