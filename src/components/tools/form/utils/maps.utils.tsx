import { FieldValues } from "react-hook-form";

import { InputProps } from "../components/input";
import { Input } from "../components/input";
import { Input as InputType } from "../types/form.types";

export function mapInputs<T extends FieldValues>(
  input: InputType<T>,
  index: number
) {
  switch (input.type) {
    case "number":
    case "text":
      return <Input {...input} key={index} />;
    case "password":
      return <Input {...input} type="password" key={index} />;
    default:
      return null;
  }
}
