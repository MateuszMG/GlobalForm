import { WithoutWrap } from "../../../../helpers/Components";
import { Checkbox } from "../inputs/Checkbox/Checkbox";
import { Date } from "../inputs/Date/Date";
import { File } from "../inputs/File/File";
import { Input } from "../inputs/Input/Input";
import { Select } from "../inputs/Select/Select";
import { Textarea } from "../inputs/Textarea/Textarea";
import { InputsFactoryProps } from "./interfaces";

export const InputsFactory = ({
  control,
  errors,
  inputsData,
  register,
}: InputsFactoryProps) => {
  return (
    <>
      {inputsData.map(({ inputs, inputsWrap }) => {
        const InputsWrap = !inputsWrap ? WithoutWrap : inputsWrap;

        return (
          <InputsWrap>
            {inputs.map((inputData) => {
              const { name, type, inputWrap } = inputData;
              const data = {
                register,
                errors,
                inputData,
              };
              const InputWrap = !inputWrap ? WithoutWrap : inputWrap;

              return (
                <InputWrap key={name}>
                  {(!type || type === "text") && <Input {...data} />}
                  {type === "textarea" && <Textarea {...data} />}
                  {type === "checkbox" && <Checkbox {...data} />}
                  {type === "date" && <Date {...data} />}
                  {type === "file" && <File {...data} />}
                  {type === "select" && <Select {...{ ...data, control }} />}

                  {/* {type === "textarea" ? (
                    <Textarea {...data} />
                  ) : type === "checkbox" ? (
                    <Checkbox {...data} />
                  ) : type === "date" ? (
                    <Date {...data} />
                  ) : type === "file" ? (
                    <File {...data} />
                  ) : type === "select" ? (
                    <Select {...{ ...data, control }} />
                  ) : (
                    <Input {...data} />
                  )} */}
                </InputWrap>
              );
            })}
          </InputsWrap>
        );
      })}
    </>
  );
};
