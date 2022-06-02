import { GlobalForm } from "../../components/GlobalForm/GlobalForm";
import { InputsData } from "../../components/GlobalForm/utils/InputsFactory/interfaces";
import {
  Container,
  FormWrap,
  InputsWrapFiles,
  InputsWrapMain,
  InputsWrapPagination,
  InputWrap,
} from "./Mixed.styled";
import { selectDataLimit, selectDataSortBy } from "./mixedData";

const inputsData: InputsData = [
  {
    inputsWrap: InputsWrapMain,
    inputs: [
      {
        inputWrap: InputWrap,
        type: "date",
        label: "Date",
        name: "date",
      },
      {
        inputWrap: InputWrap,
        type: "checkbox",
        label: "Checkbox",
        name: "checkbox",
      },
      {
        inputWrap: InputWrap,
        type: "text",
        label: "Text (deafult)",
        name: "text",
        placeholder: "Text (deafult)",
      },
    ],
  },
  {
    inputs: [
      {
        inputWrap: InputWrap,
        type: "textarea",
        label: "Textarea",
        name: "textarea",
        placeholder: "Textarea",
      },
    ],
  },
  {
    inputsWrap: InputsWrapFiles,
    inputs: [
      {
        inputWrap: InputWrap,
        type: "file",
        name: "files",
      },
    ],
  },
  {
    inputsWrap: InputsWrapPagination,
    inputs: [
      {
        inputWrap: InputWrap,
        name: "limit",
        type: "select",
        label: "Page size",
        selectData: selectDataLimit,
      },
      {
        inputWrap: InputWrap,
        name: "sortBy",
        type: "select",
        label: "Sort by",
        selectData: selectDataSortBy,
      },
      {
        inputWrap: InputWrap,
        name: "sortDesc",
        type: "checkbox",
        label: "Sort desc ?",
      },
    ],
  },
];

export const Mixed = () => {
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
