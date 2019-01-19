import { addMinutes, format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getSchedule = async (date :Date) => {
  // Convert local time to eastern time.
  const est = addMinutes(date, date.getTimezoneOffset() - 300);
  const dateStr = format(est, 'YYYYMMDD');
  return await fetch(`${API_URL}/schedule/${dateStr}`)
    .then(res => res.json());
}