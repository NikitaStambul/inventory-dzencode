'use client';

import './custom.scss';
import { useEffect } from 'react';

export default function BootstrapProvider() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <></>;
}
