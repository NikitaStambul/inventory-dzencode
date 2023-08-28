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
    <div className={styles.list + ' d-flex w-100 gap-6'}>
      <div className="d-flex flex-column gap-3 h-100">
        {orders.map((order) => (
          <GroupItem
            order={order}
            key={order.id}
            selected={order.id === selectedId}
          />
        ))}
      </div>
      <div className={styles.list__products + ' d-flex flex-column rounded border bg-white'}>
        {selectedOrder ? (
          <>
            <h4 className="mb-0 p-4">{selectedOrder.title}</h4>
            <GroupProductsList products={oderProducts} orderId={selectedId!} />
          </>
        ) : (
          <h2 className="mb-0 p-4">
            There is no order selected
          </h2>
        )}
      </div>
    </div>
  );
}
