import { format } from "date-fns";

const API_URL = process.env.API_URL;

export const getGame = async (date: Date, id: number) => {
  const dateStr = format(date, 'YYYYMMDD');
  return await fetch(`${API_URL}/game/${dateStr}/${id}`)
    .then(res => res.json());
}