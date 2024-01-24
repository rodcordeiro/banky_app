import { api } from '@/core/api';
import { AuthenticatedUser } from '@/redux/slices/user/types/user.type';
export const GetUserRequest = async () =>
  await api.get<AuthenticatedUser>(
    '/v1/users/me',
  );
