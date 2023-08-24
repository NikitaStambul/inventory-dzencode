'use client';

import { useAppDispatch } from '@/store/hooks';
import { fetchOrders } from '@/store/slices/ordersSlice';
import { fetchProducts } from '@/store/slices/productsSlice';
import { useEffect } from 'react';

export default function LoadDataComponent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());
  }, [dispatch]);

  return <div style={{ display: 'none' }}>LoadComponent</div>;
}
