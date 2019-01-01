import { addMinutes, format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getGame = async (date: Date, id: number) => {
  const est = addMinutes(date, date.getTimezoneOffset() - 300);
  const dateStr = format(est, 'YYYYMMDD');
  return await fetch(`${API_URL}/game/${dateStr}/${id}`)
    .then(res => res.json());
}