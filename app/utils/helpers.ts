export function formatCurrency(value = 0) {
  const formatter = Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });
  return formatter.format(value);
}

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 2000): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}