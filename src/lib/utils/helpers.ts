import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { de } from 'date-fns/locale';

// format currency
export const formatCurrency = (value: number | string) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(value));
};

// format date with date-fns und date-fns-tz to Europe/Berlin timezone
export const formatDate = (date: string | Date) => {
  return format(toZonedTime(new Date(date), 'Europe/Berlin'), 'dd.MM.yyyy', {
    locale: de,
  });
};
