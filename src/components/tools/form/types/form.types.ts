import { z } from "zod";
import { FieldValues } from "react-hook-form";

// import { ButtonProps } from '@/components/layout/Button';

import { InputProps } from "../components/input";

export type Input<T> = {
  name: keyof T;
  type: InputProps["type"];
} & Omit<InputProps, "name" | "type">;

export interface iFormProps<T extends FieldValues> {
  inputs: Input<T>[];
  handleSubmit: (data: T) => void | Promise<void>;
  zodSchema?: z.Schema<T>;
  submitButtonText?: string;
  isLoading?: boolean;
  //   customAction1?: Omit<ButtonProps, "isLoading">;
  //   customAction2?: Omit<ButtonProps, "isLoading">;
}
