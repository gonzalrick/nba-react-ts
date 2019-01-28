const API_URL = process.env.REACT_APP_API_URL;

export const getArticle = async (date: string, id: number) => {
  return await fetch(`${API_URL}/article/${date}/${id}`)
    .then(res => res.json());
}