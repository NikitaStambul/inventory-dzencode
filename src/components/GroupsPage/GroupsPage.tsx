'use client';

import classNames from 'classnames';
import styles from './GroupsPage.module.scss';
import GroupsList from '../GroupsList';
import { useAppSelector } from '@/store/hooks';
import Loader from '../Loader/Loader';

export default function GroupsPage() {
  const { orders, isLoaded, selected } = useAppSelector((state) => state.ordersState);

  return (
    <div className={styles.page}>
      {isLoaded ? (
        <>
          <div className={styles.page__heading}>
            <button
              type="button"
              className={classNames(
                'btn btn-circle btn-success shadow',
                styles.page__add,
              )}
            >
              +
            </button>
            <h2 className={styles.page__title}>Groups / {orders.length}</h2>
          </div>
          <GroupsList orders={orders} selectedId={selected} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
