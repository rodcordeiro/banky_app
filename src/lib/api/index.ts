import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://82.180.136.148:3338/',
  headers: {
    'Content-Type': 'application/json',
  },
});
