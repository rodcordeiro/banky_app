import { z } from 'zod';

const ExpenseCreateFormSchema = z.object({
  name: z.string(),
  value: z.number().transform((val) => val.toString()),
  account: z.object({
    label: z.string(),
    value: z.string(),
  }),
  type: z.object({
    label: z.string(),
    value: z.string(),
  }),
  bill: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .optional(),
});

type ExpenseCreateFormType = z.infer<typeof ExpenseCreateFormSchema>;

export { ExpenseCreateFormSchema, ExpenseCreateFormType };
