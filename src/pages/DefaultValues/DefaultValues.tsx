import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import { Container, FormWrap, InputWrap } from "./DefaultValues.styled";

const inputsData: InputsData = [
  {
    inputs: [
      {
        inputWrap: InputWrap,
        label: "Default Email",
        name: "email",
        placeholder: "email@email.com",
      },
      {
        inputWrap: InputWrap,
        label: "Default Password",
        name: "password",
        placeholder: "StrongPassword1#",
      },
    ],
  },
];

const defaultValues = {
  email: "default@email.email",
  password: "default password",
};

export const DefaultValues = () => {
  return (
    <Container>
      <FormWrap>
        <GlobalForm
          onSubmit={(data) => console.log(data)}
          inputsData={inputsData}
          defaultValues={defaultValues}
        />
      </FormWrap>
    </Container>
  );
};
