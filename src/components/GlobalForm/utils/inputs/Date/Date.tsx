import { InputBox } from "../../InputBox/InputBox";
import { InputProps } from "../../InputsFactory/interfaces";
import { DateInput } from "./Date.styled";

export const Date = ({ register, errors, inputData }: InputProps) => {
  const { name, label } = inputData;

  return (
    <InputBox label={label} error={errors[name] && errors[name].message}>
      <DateInput type={"datetime-local"} {...register(name)} />
    </InputBox>
  );
};
