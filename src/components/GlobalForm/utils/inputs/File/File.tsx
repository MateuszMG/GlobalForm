import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { InputBox } from "../../InputBox/InputBox";
import { InputProps } from "../../InputsFactory/interfaces";
import { Icon, Input, Label, LabelWrap } from "./File.styled";

export const File = ({ register, errors, inputData }: InputProps) => {
  const { name, label } = inputData;
  return (
    <InputBox label={label} error={errors[name] && errors[name].message}>
      <LabelWrap>
        <Label>
          <Input
            accept={"[.png/ ./jpg .jpeg/ .svg/]"}
            style={{ display: "none" }}
            type="file"
            multiple
            {...register(name)}
          />
          <Icon>
            <FileDownloadIcon />
          </Icon>
        </Label>
      </LabelWrap>
    </InputBox>
  );
};
