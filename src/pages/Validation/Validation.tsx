import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import { getResolver } from "../../validations/yup/yupObjects";
import { Container, FormWrap, InputWrap } from "./Validation.styled";

const inputsData: InputsData = [
  {
    inputs: [
      {
        inputWrap: InputWrap,
        label: "Validation Email",
        name: "email",
        placeholder: "email@email.com",
      },
      {
        inputWrap: InputWrap,
        label: "Validation Password",
        name: "password",
        placeholder: "StrongPassword1#",
      },
    ],
  },
];

export const Validation = () => {
  return (
    <Container>
      <FormWrap>
        <GlobalForm
          onSubmit={(data) => console.log(data)}
          inputsData={inputsData}
          resolver={getResolver("login")}
        />
      </FormWrap>
    </Container>
  );
};
