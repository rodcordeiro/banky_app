import { store } from '@/redux/store.redux';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://82.180.136.148:3334/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((req) => {
  const access_token = store.getState().auth.access_token;

  if (access_token) {
    req.headers.Authorization = `Bearer ${access_token}`;
  }

  return Promise.resolve(req);
});

export { api };
