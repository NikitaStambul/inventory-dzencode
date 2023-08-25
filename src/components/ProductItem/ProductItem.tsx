import { Product } from '@/types/Product';
import styles from './ProductItem.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import { useAppDispatch } from '@/store/hooks';
import { setDeleteProduct } from '@/store/slices/deleteProductModalSlice';
import { Icons } from '@/components/Icons';
import { formatDate } from '@/helpers/date-time-formatters';

export default function ProductItem({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const isAvailable = product.isNew === 1;

  const deleteHandler = () => {
    dispatch(setDeleteProduct(product));
  };

  const formattedStart = formatDate(new Date(product.guarantee.start));
  const formattedEnd = formatDate(new Date(product.guarantee.end));

  return (
    <div
      style={{ height: 64, width: 'max-content' }}
      className="gap-4 d-flex align-items-center rounded py-2 px-4 border-top border-bottom"
    >
      <span
        style={{ width: 8, height: 8 }}
        className={classNames(
          'rounded-circle',
          isAvailable ? 'bg-primary' : 'bg-dark',
        )}
      />

      <Image
        height={40}
        width={60}
        src={'/' + product.photo}
        alt={product.title + ' image'}
        style={{ objectFit: 'contain' }}
      />

      <div
        className="d-flex flex-column justify-content-between"
        style={{ width: 400 }}
      >
        <h5 className={styles.item__title + ' m-0 text-decoration-underline'}>
          {product.title}
        </h5>
        <p className="text-muted m-0">{product.serialNumber}</p>
      </div>

      <div
        style={{ width: 90 }}
        className={isAvailable ? 'text-primary' : 'text-dark'}
      >
        {isAvailable ? 'available' : 'maintaining'}
      </div>

      <div className="text-dark" style={{ width: 100 }}>
        <div className={styles.item__guaranteeStart}>{formattedStart}</div>
        <div className={styles.item__guaranteeEnd}>{formattedEnd}</div>
      </div>

      <div style={{ width: 110 }}>{isAvailable ? 'New' : 'Second-hand'}</div>

      <div className="d-flex flex-column" style={{ width: 100 }}>
        <div className="text-muted">{product.price[0].value}$</div>
        <div className="text-dark">{product.price[1].value}UAH</div>
      </div>

      <div
        className={
          styles.item__typography + ' text-dark text-decoration-underline'
        }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>
      <div
        className={
          styles.item__typography + ' text-dark text-decoration-underline'
        }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>
      <div
        className={
          styles.item__typography + ' text-dark text-decoration-underline'
        }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error
        officia veniam placeat molestiae corporis odit facilis in facere
        obcaecati?
      </div>

      <button type="button" className="btn btn-danger" onClick={deleteHandler}>
        {<Icons.trash width={24} height={24} />}
      </button>
    </div>
  );
}
