import { z } from 'zod';

export const AuthenticatedUser = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  name: z.string(),
  username: z.string(),
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUser>;

export type UserStateType = {
  [Key in keyof AuthenticatedUser]: AuthenticatedUser[Key] | null;
};
