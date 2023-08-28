'use client';

import GroupsList from './GroupsList';
import { useAppSelector } from '@/store/hooks';
import Loader from './Loader';
import Link from 'next/link';

export default function GroupsPage() {
  const { orders, isLoaded, selected } = useAppSelector(
    (state) => state.ordersState,
  );

  return (
    <div className="d-flex flex-column position-relative h-100 p-5">
      {isLoaded ? (
        <>
          <div className="d-flex align-items-center gap-6 mb-4">
            <Link href='groups/new'>
              <button type="button" className="btn btn-success shadow">
                +
              </button>
            </Link>
            <h2 className="m-0">Groups / {orders.length}</h2>
          </div>
          <GroupsList orders={orders} selectedId={selected} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
