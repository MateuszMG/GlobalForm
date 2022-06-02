import { InputProps } from "../../InputsFactory/interfaces";
import { Error, Input, Label, Span, Wrap } from "./Checkbox.styled";

export const Checkbox = ({ register, errors, inputData }: InputProps) => {
  const { name, label } = inputData;

  return (
    <Wrap>
      <Label>
        {label}
        <Input type={"checkbox"} {...register(name)} />
        <Span />
      </Label>

      <Error>{errors[name] && errors[name].message}</Error>
    </Wrap>
  );
};
