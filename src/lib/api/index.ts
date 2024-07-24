import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://82.180.136.148:3338/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function Reauthenticate(
  payload: {
    login: string;
    refreshToken: string;
  },
  onSuccess: (data: Authenticated.Authentication) => Promise<void>,
) {
  return await api
    .post<Authenticated.Authentication>('/api/v1/auth/refresh', payload)
    .then(async ({ data }) => {
      api.defaults.headers.authorization = `Bearer ${data.accessToken}`;
      await onSuccess(data);
    })
    .catch(err => {
      throw err;
    });
}
