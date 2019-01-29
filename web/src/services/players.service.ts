import { format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getPlayers = async (date: Date) => {
  const dateStr = format(date, 'YYYY');
  return await fetch(`${API_URL}/players/${dateStr}`).then(res => {
    return res.json();
  });
};
