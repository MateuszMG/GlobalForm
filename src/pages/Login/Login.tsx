import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import { Container, FormWrap, InputWrap } from "./Login.styled";

const inputsData: InputsData = [
  {
    inputs: [
      {
        inputWrap: InputWrap,
        label: "Email",
        name: "email",
        placeholder: "email@email.com",
      },
      {
        inputWrap: InputWrap,
        label: "Password",
        name: "password",
        placeholder: "StrongPassword1#",
      },
    ],
  },
];

export const Login = () => {
  return (
    <Container>
      <FormWrap>
        <GlobalForm
          onSubmit={(data) => console.log(data)}
          inputsData={inputsData}
        />
      </FormWrap>
    </Container>
  );
};
