import { Order } from '@/types/Order';
import GroupItem from '../GroupItem/GroupItem';
import styles from './GroupsList.module.scss';
import GroupProductsList from '../GroupProductsList/GroupProductsList';

export default function GroupsList({
  orders,
  selectedId,
}: {
  orders: Order[];
  selectedId?: number;
}) {
  const selectedOrder = orders.find((order) => order.id === selectedId);

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
      <div className={styles.list__products}>
        {selectedOrder ? (
          <>
            <h4 className={styles.list__title}>{selectedOrder.title}</h4>
            <GroupProductsList products={selectedOrder.products} orderId={selectedId!} />
          </>
        ) : (<h2 className={styles.list__noSelected}>There is no order selected</h2>)}
      </div>
    </div>
  );
}
