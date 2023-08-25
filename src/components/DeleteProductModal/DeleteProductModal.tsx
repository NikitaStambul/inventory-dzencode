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
          <div className="p-4">
            <h5 className="w-100 mb-2">Are you sure to delete this?</h5>
            <div
              className={classNames(
                'd-flex align-items-center bg-white rounded p-2 gap-4 width-max-content',
                styles.modal__item,
              )}
              style={{ height: 64 }}
            >
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

              <div className="d-flex flex-column justify-content-space-between">
                <h5 className={styles.item__title}>{product.title}</h5>
                <p className="text-muted m-0">{product.serialNumber}</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end p-4 gap-6 w-100 bg-primary">
            <button
              type="button"
              className="btn btn-light"
              onClick={dismissHandler}
            >
              Dismiss
            </button>

            <button
              type="button"
              className="btn btn-danger d-flex align-items-center gap-2"
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
