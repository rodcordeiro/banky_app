import { z } from 'zod';
import { AccountsTypes } from '../../types/accounts.types';

const AccountEditFormSchema = z.object({
  type: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

type AccountEditFormType = z.infer<typeof AccountEditFormSchema>;

export { AccountEditFormSchema, AccountEditFormType };
