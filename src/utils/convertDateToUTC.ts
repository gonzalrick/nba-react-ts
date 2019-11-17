import { addMinutes, format, startOfDay } from 'date-fns';

export function convertDateToUTC(date: Date) {
  const est = addMinutes(startOfDay(date), date.getTimezoneOffset() - 300);
  return format(est, 'YYYYMMDD');
}
