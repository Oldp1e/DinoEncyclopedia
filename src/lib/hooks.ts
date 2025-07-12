'use client';

import { useState, useEffect } from 'react';

export function useClientOnly() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export function useFormattedDate(date: string | Date, options?: Intl.DateTimeFormatOptions) {
  const [formattedDate, setFormattedDate] = useState('');
  const hasMounted = useClientOnly();

  useEffect(() => {
    if (hasMounted) {
      const d = new Date(date);
      const defaultOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        ...options
      };
      setFormattedDate(d.toLocaleDateString('en-GB', defaultOptions));
    }
  }, [date, hasMounted, options]);

  if (!hasMounted) {
    return ''; // Return empty string during SSR
  }

  return formattedDate;
}
