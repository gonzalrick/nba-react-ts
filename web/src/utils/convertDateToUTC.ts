import { addMinutes, format } from 'date-fns';

export function convertDateToUTC(date: Date) {
  const est = addMinutes(date, date.getTimezoneOffset() - 300);
  return format(est, 'YYYYMMDD');
}
