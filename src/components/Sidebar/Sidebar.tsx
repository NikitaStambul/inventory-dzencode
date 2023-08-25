import styles from './Sidebar.module.scss';
import NavLink from '../NavLink';
import Image from 'next/image';
import classNames from 'classnames';
import { Icons } from '../Icons';

const routes = [
  { title: 'Incoming', href: '/' },
  { title: 'Groups', href: '/groups' },
  { title: 'Products', href: '/products' },
  { title: 'Users', href: '/users' },
  { title: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className={classNames(styles.sidebar, 'shadow')}>
      <div className="d-flex position-relative">
        <Image
          src="/user-image.png"
          width={100}
          height={100}
          alt="user image"
          className="d-flex rounded-circle"
        />
      <button className={styles.sidebar__userSettings}>
          <Icons.gear width={20} height={20} />
        </button>
      </div>
      <nav className="d-flex flex-column align-items-center gap-3">
        {routes.map(({ href, title }) => (
          <NavLink key={href} href={href} className={styles.sidebar__link}>
            {title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
