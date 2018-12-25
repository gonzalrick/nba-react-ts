import { addMinutes, format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getSchedule = async (date :Date) => {
  const utc = addMinutes(date, date.getTimezoneOffset());
  const dateStr = format(utc, 'YYYYMMDD');
  return await fetch(`${API_URL}/schedule/${dateStr}`)
    .then((res) => {
      return res.json();
    });
}