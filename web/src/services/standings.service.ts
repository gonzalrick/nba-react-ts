const API_URL = process.env.REACT_APP_API_URL;

export const getPlayers = async () => {
  return await fetch(`${API_URL}/standings`)
    .then((res) => {
      return res.json();
    });
}