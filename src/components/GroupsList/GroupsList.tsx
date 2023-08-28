import { Order } from '@/types/Order';
import GroupItem from '../GroupItem';
import styles from './GroupsList.module.scss';
import GroupProductsList from '../GroupProductsList';
import { useAppSelector } from '@/store/hooks';

export default function GroupsList({
  orders,
  selectedId,
}: {
  orders: Order[];
  selectedId?: number;
}) {
  const { products } = useAppSelector((state) => state.productsState);
  const selectedOrder = orders.find((order) => order.id === selectedId);
  const oderProducts = products.filter((product) =>
    selectedOrder?.products.includes(product.id),
  );

  return (
    <div className={styles.list}>
      <div className={styles.list__groups}>
        {orders.map((order) => (
          <GroupItem
            order={order}
            key={order.id}
            selected={order.id === selectedId}
          />
        ))}
      </div>
      <div className={styles.list__products + ' border'}>
        {selectedOrder ? (
          <>
            <h4 className={styles.list__title}>{selectedOrder.title}</h4>
            <GroupProductsList products={oderProducts} orderId={selectedId!} />
          </>
        ) : (
          <h2 className={styles.list__noSelected}>
            There is no order selected
          </h2>
        )}
      </div>
    </div>
  );
}
