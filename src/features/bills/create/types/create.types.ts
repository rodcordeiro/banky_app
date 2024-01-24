import { z } from 'zod';

const BillCreateFormSchema = z.object({
  name: z.string(),
  frequency: z.object({
    label: z.string(),
    value: z.string(),
  }),
  account: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

type BillCreateFormType = z.infer<typeof BillCreateFormSchema>;

export { BillCreateFormSchema, BillCreateFormType };
