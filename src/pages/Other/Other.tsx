import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import {
  Container,
  FormWrap,
  InputWrap1,
  InputWrap2,
  InputWrap3,
  InputsWrap1,
  InputsWrap2,
  InputsWrap3,
  Form,
  Buttons,
} from "./Other.styled";

const createData = (version: string | number) =>
  Array.from(Array(3).keys()).map((el, i) => ({
    inputWrap: i === 0 ? InputWrap1 : i === 1 ? InputWrap2 : InputWrap3,
    label: `Wrap -- v.${version}.${i}`,
    name: `Wrap -- v.${version}.${i}`,
    placeholder: `Wrap -- v.${version}.${i}`,
  }));

const inputsData: InputsData = [
  {
    inputsWrap: InputsWrap1,
    inputs: createData("1"),
  },
  {
    inputsWrap: InputsWrap2,
    inputs: createData("2"),
  },
  {
    inputsWrap: InputsWrap3,
    inputs: createData("3"),
  },
];

export const Other = () => {
  return (
    <Container>
      <FormWrap>
        <GlobalForm
          formComponent={Form}
          onSubmit={(data) => console.log(data)}
          inputsData={inputsData}
          buttonsData={{
            buttonsComponent: Buttons,
            reset: {
              children: "Reset",
              disabled: true,
            },
            submit: {
              children: "Send",
              type: "submit",
              onClick: () => console.log("Hello to me, button XD"),
            },
          }}
        />
      </FormWrap>
    </Container>
  );
};
