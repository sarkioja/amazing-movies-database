import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});

const token = process.env.REACT_APP_TMDB_API_KEY

console.log(token)

api.defaults.headers.authorization = `Bearer ${token}`;

export default api;