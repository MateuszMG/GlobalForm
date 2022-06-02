import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import { InputWrap } from "../Login/Login.styled";
import {
  Container,
  FormWrap,
  InputsWrap,
  InputsWrap2,
} from "./ManyInputsWrappers.styled";

const inputsData: InputsData = [
  {
    inputsWrap: InputsWrap,
    inputs: [
      {
        inputWrap: InputWrap,
        label: "InputsWrap Email",
        name: "InputsWrap email",
        placeholder: "InputsWrap Email",
      },
      {
        inputWrap: InputWrap,
        label: "InputsWrap Password",
        name: "InputsWrap password",
        placeholder: "InputsWrap Password",
      },
    ],
  },
  {
    inputsWrap: InputsWrap2,
    inputs: [
      {
        inputWrap: InputWrap,
        label: "InputsWrap2 Email",
        name: "InputsWrap2 email",
        placeholder: "InputsWrap2 Email",
      },
      {
        inputWrap: InputWrap,
        label: "InputsWrap2 Password",
        name: "InputsWrap2 password",
        placeholder: "InputsWrap2 Password",
      },
    ],
  },
];
export const ManyInputsWrappers = () => {
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
