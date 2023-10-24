import { z } from 'zod';
import { AuthResponseType } from '@/redux/slices/auth/types/auth.type';

export const loginFormSchema = z.object({
  username: z.string({ required_error: 'Insira um usuário válido' }),
  password: z.string({ required_error: 'Senha é obrigatória' }),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;

export type LoginResponse = AuthResponseType;
