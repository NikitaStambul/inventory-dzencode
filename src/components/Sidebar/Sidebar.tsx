import styles from './Sidebar.module.scss';
import NavLink from '../NavLink';
import Image from 'next/image';
import classNames from 'classnames';

const routes = [
  { title: 'Incoming', href: '/' },
  { title: 'Groups', href: '/groups' },
  { title: 'Products', href: '/products' },
  { title: 'Users', href: '/users' },
  { title: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  return (
    <div className={classNames(styles.sidebar, 'shadow')}>
      <div className={styles.sidebar__imageContainer}>
        <Image
          src="/user-image.png"
          width={100}
          height={100}
          alt="user image"
          className={styles.sidebar__image}
        />
        <button className={styles.sidebar__userSettings}>
          <Image
            src="/icons/gear.svg"
            width={20}
            height={20}
            alt="gear image"
          />
        </button>
      </div>
      <nav className={styles.sidebar__nav}>
        {routes.map(({ href, title }) => (
          <NavLink key={href} href={href} className={styles.sidebar__link}>
            {title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
