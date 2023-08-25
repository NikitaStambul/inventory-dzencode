'use client';

import { Icons } from '@/components/Icons';
import styles from './DateTimeDisplay.module.scss';
import { useState, useEffect } from 'react';
import { formatDate, formatTime } from '@/helpers/date-time-formatters';

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

  const formattedDate = formatDate(currentDateTime);
  const formattedTime = formatTime(currentDateTime);

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
