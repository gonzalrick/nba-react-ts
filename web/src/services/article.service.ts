const API_URL = process.env.REACT_APP_API_URL;

export const getArticle = async (date: string, id: number) => {
  console.log(`${API_URL}/article/${date}/${id}`);
  return await fetch(`${API_URL}/article/${date}/${id}`)
    .then(res => res.json());
}