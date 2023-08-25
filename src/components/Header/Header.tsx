import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import DateTimeDisplay from '../DateTimeDisplay';
import LoadDataComponent from '../LoadDataComponent';

export default function Header() {
  return (
    <header className={styles.header + ' shadow flex-shrink-0'}>
      <div className="container d-flex h-100 align-items-center justify-content-between">
        <Link
          href="/"
          className="d-flex align-items-center font-weight-bold gap-2 text-primary text-decoration-none text-uppercase"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          Inventory
        </Link>
        <input
          className="form-control me-2"
          style={{ maxWidth: 300 }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <DateTimeDisplay />
      </div>
      <LoadDataComponent />
    </header>
  );
}
