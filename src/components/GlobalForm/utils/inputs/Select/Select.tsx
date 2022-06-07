import { Control, Controller, FieldValues } from "react-hook-form";
import { customStyles } from "./customStyles";
import { InputBox } from "../../InputBox/InputBox";
import { InputProps } from "../../InputsFactory/interfaces";
import { Wrap } from "./Select.styled";
import ReactSelect from "react-select";

interface SelectProps extends InputProps {
  control?: Control<FieldValues, any>;
}

export const Select = ({ errors, inputData, control }: SelectProps) => {
  const { name, label, selectData } = inputData;

  if (!selectData) return null;

  return (
    <InputBox label={label} error={errors[name] && errors[name].message}>
      <Wrap>
        <Controller
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={selectData}
              isClearable
              styles={customStyles}
            />
          )}
          name={name}
          control={control}
          defaultValue={10}
        />
      </Wrap>
    </InputBox>
  );
};
