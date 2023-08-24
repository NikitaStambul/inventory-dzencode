import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import DateTimeDisplay from '../DateTimeDisplay/DateTimeDisplay';
import LoadDataComponent from '../LoadDataComponent';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container d-flex h-100 align-items-center justify-content-between">
        <Link href="/" className={styles.header__logo}>
          <Image src="/logo.png" width={40} height={40} alt="logo" />
          Inventory
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className={styles.header__dateTime}>
          <DateTimeDisplay />
        </div>
      </div>
      <LoadDataComponent />
    </header>
  );
}
