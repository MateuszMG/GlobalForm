import { useEffect } from "react";
import { FieldValues, Resolver, useForm } from "react-hook-form";
import { StyledComponent } from "styled-components";
import { DefaultForm } from "./GlobalForm.styled";
import { ButtonsBox, ButtonsBoxProps } from "./utils/ButtonsBox/ButtonsBox";
import { InputsFactory } from "./utils/InputsFactory/InputsFactory";
import { InputsData } from "./utils/InputsFactory/interfaces";

const defaultButtonsData: ButtonsBoxProps = {
  reset: {
    children: "Reset",
    type: "reset",
  },
  submit: {
    children: "Send",
    type: "submit",
  },
};

interface GlobalFormProps {
  buttonsData?: ButtonsBoxProps;
  defaultValues?: any;
  formComponent?: StyledComponent<"form", any, {}, never>;
  inputsData: InputsData;
  itemToEdit?: any;
  onSubmit: (data: any) => void;
  resolver?: Resolver<FieldValues, any> | undefined;
}

export const GlobalForm = ({
  buttonsData,
  defaultValues,
  formComponent: FormComponent,
  inputsData,
  itemToEdit,
  onSubmit,
  resolver,
}: GlobalFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues,
    resolver,
  });

  // auto fill if itemToEdit exist
  useEffect(() => {
    if (itemToEdit) reset(itemToEdit);
  }, []);

  const Form = FormComponent || DefaultForm;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
      <InputsFactory {...{ control, errors, inputsData, register }} />
      <ButtonsBox {...(buttonsData || defaultButtonsData)} />
    </Form>
  );
};
