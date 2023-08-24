import styles from './ProductsList.module.scss';
import ProductItem from '../ProductItem';
import { Product } from '@/types/Product';

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
