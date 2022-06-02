import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { WithoutWrapType } from "../../../../helpers/Components";

type InputTypes =
  | "text"
  | "checkbox"
  | "email"
  | "password"
  | "number"
  | "select"
  | "textarea"
  | "file"
  | "date";

type InputData = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  selectData?: SelectOption[];
  inputWrap?: WithoutWrapType;
};

export type InputsData = {
  inputsWrap?: WithoutWrapType;
  inputs: InputData[];
}[];

export interface InputsFactoryProps {
  control: Control<FieldValues, any> | undefined;
  errors: {
    [x: string]: any;
  };
  inputsData: InputsData;
  register: UseFormRegister<FieldValues>;
}

///// general

export interface InputProps {
  register: UseFormRegister<FieldValues>;
  errors: {
    [x: string]: any;
  };
  inputData: InputData;
}

///// select

export interface SelectOption {
  value: string | number;
  label: string | number;
}
