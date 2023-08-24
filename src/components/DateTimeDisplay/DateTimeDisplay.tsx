'use client';

import { Icons } from '@/components/Icons';
import styles from './DateTimeDisplay.module.scss';
import { useState, useEffect } from 'react';

export default function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = currentDateTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={styles.dateTime}>
      <div className={styles.dateTime__today}>Today</div>
      <div className={styles.dateTime__content}>
        <div>{formattedDate}</div>
        <div className={styles.dateTime__time}>
          {<Icons.watch fill="var(--color-primary)" />}
          {formattedTime}
        </div>
      </div>
    </div>
  );
}
