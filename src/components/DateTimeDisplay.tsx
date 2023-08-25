'use client';

import { Icons } from '@/components/Icons';
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
    <div className="d-flex flex-column justify-content-space-between">
      <div>Today</div>
      <div className="d-flex gap-6">
        <div>{formattedDate}</div>
        <div className="gap-2 d-flex align-items-center">
          {<Icons.watch fill="var(--color-primary)" />}
          {formattedTime}
        </div>
      </div>
    </div>
  );
}
