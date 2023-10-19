import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../../../core/api';
import { LoginFormType, LoginResponse } from '../types/login.types';

export const LoginRequest = async (payload: LoginFormType) =>
  await api.post<LoginFormType, AxiosResponse<LoginResponse>, AxiosError>(
    '/v1/auth/login',
    payload,
  );
