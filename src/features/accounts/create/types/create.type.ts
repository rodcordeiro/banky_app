import { z } from 'zod';

const AccountCreateFormSchema = z.object({
  name: z.string(),
  type: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

type AccountCreateFormType = z.infer<typeof AccountCreateFormSchema>;

export { AccountCreateFormSchema, AccountCreateFormType };
