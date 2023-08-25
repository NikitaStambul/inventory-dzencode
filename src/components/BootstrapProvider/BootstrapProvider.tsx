'use client';

import './custom.scss';
import { useEffect } from 'react';

export default function BootstrapProvider() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);

  return <></>;
}
