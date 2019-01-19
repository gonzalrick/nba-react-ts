const API_URL = process.env.REACT_APP_API_URL;

export const getTeams = async (year :string) => {
  return await fetch(`${API_URL}/teams/${year}`)
    .then((res) => {
      return res.json();
    });
}