import { useRedux } from '../../hooks';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://82.180.136.148:3334/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
