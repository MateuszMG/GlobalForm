import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import {
  Container,
  FormWrap,
  InputWrap1,
  InputWrap2,
  InputWrap3,
} from "./ManySingleInputs.styled";

const inputsData: InputsData = [
  {
    inputs: [
      {
        inputWrap: InputWrap1,
        label: "InputWrap1",
        name: "InputWrap1",
        placeholder: "Deafult 1",
      },
      {
        inputWrap: InputWrap2,
        label: "InputWrap2",
        name: "InputWrap2",
        placeholder: "Deafult 2",
      },
      {
        inputWrap: InputWrap3,
        label: "InputWrap3",
        name: "InputWrap3",
        placeholder: "Deafult 3",
      },
    ],
  },
];

export const ManySingleInputs = () => {
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
