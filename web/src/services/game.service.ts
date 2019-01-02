import { addMinutes, format } from 'date-fns';

const API_URL = process.env.REACT_APP_API_URL;

export const getGame = async (date: string, id: number) => {
  return await fetch(`${API_URL}/game/${date}/${id}`)
    .then(res => res.json());
}