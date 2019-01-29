const API_URL = process.env.REACT_APP_API_URL;

export const getPlayers = async (season: string) => {
  return await fetch(`${API_URL}/players/${season}`)
    .then((res) => {
      return res.json();
    });
}