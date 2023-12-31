import classNames from 'classnames';
import styles from './GroupItem.module.scss';
import { Icons } from '../Icons';
import { Order } from '@/types/Order';
import { useAppDispatch } from '@/store/hooks';
import { selectOrder } from '@/store/slices/ordersSlice';
import { formatDate } from '@/helpers/date-time-formatters';

export default function GroupItem({
  order,
  selected,
}: {
  order: Order;
  selected?: boolean;
}) {
  const dispatch = useAppDispatch();
  const formattedDate = formatDate(new Date(order.date));

  const handleSelection = () => {
    dispatch(selectOrder(order.id));
  };

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={classNames('btn btn-circle btn-light', styles.item__menu)}
        onClick={handleSelection}
      >
        <Icons.menu width={24} height={24} />
      </button>

      <div className={styles.item__info}>
        <span className={styles.item__count}>{order.products.length}</span>
        Products
      </div>

      <div className={styles.item__date}>{formattedDate}</div>

      {selected && (
        <div className={styles.item__selected}>
          <Icons.selected />
        </div>
      )}
    </div>
  );
}
