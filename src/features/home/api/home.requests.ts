import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/core/api';
import { AuthenticatedUser } from '@/redux/slices/user/types/user.type';
export const GetUserRequest = async () =>
  await api.get<any, AxiosResponse<AuthenticatedUser>, AxiosError>(
    '/v1/users/me',
  );
