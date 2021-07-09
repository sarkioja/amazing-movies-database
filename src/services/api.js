import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`
});

const token = process.env.TMDB_API_KEY
api.defaults.headers.authorization = `Bearer ${token}`;

export default api;