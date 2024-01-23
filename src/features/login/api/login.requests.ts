import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/core/api';

import {
  LoginFormType,
  LoginResponse,
} from '@/features/login/types/login.types';

export const LoginRequest = async (payload: LoginFormType) =>
  await api.post<LoginResponse>(
    '/v1/auth/login',
    payload,
  );
