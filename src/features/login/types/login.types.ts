import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string({ required_error: 'Insira um usuário válido' }),
  password: z.string({ required_error: 'Senha é obrigatória' }),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type LoginResponse = {
  authenticated: boolean;
  accessToken: string;
  expires: number;
  refreshToken: string;
};
