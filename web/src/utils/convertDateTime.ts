import { addMinutes, format } from 'date-fns';

export function convertDateTime(date: Date) {
  const est = addMinutes(date, date.getTimezoneOffset() - 300);
  return format(est, 'YYYYMMDD');
}
