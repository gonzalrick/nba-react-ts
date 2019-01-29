import { format } from 'date-fns';

export function humaniseDate(date: Date) {
  return format(date, 'dddd Do YYYY');
}
