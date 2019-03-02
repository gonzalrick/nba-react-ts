import { format, isBefore, subYears } from 'date-fns';

export function getCurrentSeason() {
  let date = new Date();
  const currentYear = Number(format(date, 'YYYY'));
  if (isBefore(date, new Date(currentYear, 9, 15))) {
    date = subYears(date, 1);
  }
  return format(date, 'YYYY');
}
