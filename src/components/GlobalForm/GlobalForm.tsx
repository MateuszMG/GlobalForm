import { useEffect } from "react";
import { FieldValues, Resolver, useForm } from "react-hook-form";
import { Form } from "./GlobalForm.styled";
import { ButtonsBox, ButtonsBoxProps } from "./utils/ButtonsBox/ButtonsBox";
import { InputsFactory } from "./utils/InputsFactory/InputsFactory";
import { InputsData } from "./utils/InputsFactory/interfaces";

const defaultButtonsData: ButtonsBoxProps = {
  reset: {
    children: "Reset",
  },
  submit: {
    children: "Send",
  },
};

interface GlobalFormProps {
  buttonsData?: ButtonsBoxProps;
  defaultValues?: any;
  inputsData: InputsData;
  itemToEdit?: any;
  onSubmit: (data: any) => void;
  resolver?: Resolver<FieldValues, any> | undefined;
}

export const GlobalForm = ({
  buttonsData,
  defaultValues,
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()}>
      <InputsFactory {...{ control, errors, inputsData, register }} />
      <ButtonsBox {...(buttonsData || defaultButtonsData)} />
    </Form>
  );
};
