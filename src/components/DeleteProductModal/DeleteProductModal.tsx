'use client';

import Image from 'next/image';
import styles from './DeleteProductModal.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import classNames from 'classnames';
import { Icons } from '@/components/Icons';
import { removeProduct } from '@/store/slices/productsSlice';
import { dismissDeleteProduct } from '@/store/slices/deleteProductModalSlice';

export default function DeleteModal() {
  const { product } = useAppSelector((state) => state.deleteProductModalState);
  const dispatch = useAppDispatch();

  const dismissHandler = () => {
    dispatch(dismissDeleteProduct());
  };

  const deleteHandler = () => {
    if (!product) return;

    dispatch(removeProduct(product.id));
    dismissHandler();
  };

  return (
    product && (
      <div className={styles.modal}>
        <div className={styles.modal__body}>
          <div className={styles.modal__content}>
            <h5 className={styles.modal__heading}>
              Are you sure to delete this?
            </h5>
            <div className={classNames(styles.item, styles.modal__item)}>
              <span
                className={classNames(styles.item__statusPoint, {
                  [styles['item__statusPoint--available']]:
                    product?.isNew === 1,
                })}
              />

              <Image
                height={40}
                width={40}
                src={'/' + product.photo}
                alt={product.title + ' image'}
                style={{ objectFit: 'contain' }}
              />

              <div className={styles.item__info}>
                <h5 className={styles.item__title}>{product.title}</h5>
                <p className={styles.item__serial}>{product.serialNumber}</p>
              </div>
            </div>
          </div>

          <div className={styles.modal__options}>
            <button
              type="button"
              className="btn btn-light"
              onClick={dismissHandler}
            >
              Dismiss
            </button>

            <button
              type="button"
              className={classNames('btn btn-danger', styles.modal__delete)}
              onClick={deleteHandler}
            >
              {<Icons.trash />}
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  );
}
