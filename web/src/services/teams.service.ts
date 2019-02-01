const API_URL = process.env.REACT_APP_API_URL;

export const getTeams = async (season: string) => {
  return await fetch(`${API_URL}/teams/${season}`)
    .then((res) => {
      return res.json();
    });
}
