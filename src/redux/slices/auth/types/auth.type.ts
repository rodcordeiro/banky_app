import { z } from 'zod';

export const AuthResponseSchema = z.object({
  accessToken: z.string(),
  expires: z.number(),
  refreshToken: z.string(),
  authenticated: z.boolean(),
});

export type AuthResponseType = z.infer<typeof AuthResponseSchema>;

export type AuthStateType = {
  access_token: AuthResponseType['accessToken'] | null;
  expiration: AuthResponseType['expires'] | null;
};
