'use client';

import styles from './NavLink.module.scss';
import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function NavLink(props: NavLinkProps) {
  const { children, className, ...restProps } = props;
  const pathname = usePathname();
  const isActive = pathname === restProps.href;

  return (
    <Link
      className={classNames(className, styles.link, {
        [styles['link--active']]: isActive,
      })}
      {...restProps}
    >
      {children}
    </Link>
  );
}
