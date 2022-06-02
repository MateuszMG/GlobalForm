import { InputProps } from "../../InputsFactory/interfaces";
import { InputBox } from "../../InputBox/InputBox";
import { InputTag } from "./Input.styled";

export const Input = ({ register, errors, inputData }: InputProps) => {
  const { name, label, placeholder, type } = inputData;

  return (
    <InputBox label={label} error={errors[name] && errors[name].message}>
      <InputTag
        {...register(name)}
        placeholder={placeholder}
        type={type || "text"}
      />
    </InputBox>
  );
};
