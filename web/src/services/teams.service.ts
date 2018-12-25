import { format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getTeams = async (date :Date) => {
  const dateStr = format(date, 'YYYY');
  return await fetch(`${API_URL}/teams/${dateStr}`)
    .then((res) => {
      return res.json();
    });
}