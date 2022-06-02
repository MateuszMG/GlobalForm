import { InputProps } from "../../InputsFactory/interfaces";
import { InputBox } from "../../InputBox/InputBox";
import { TextareaTag } from "./Textarea.styled";

export const Textarea = ({ register, errors, inputData }: InputProps) => {
  const { name, label, placeholder } = inputData;
  return (
    <InputBox label={label} error={errors[name] && errors[name].message}>
      <TextareaTag rows={2} {...register(name)} placeholder={placeholder} />
    </InputBox>
  );
};
