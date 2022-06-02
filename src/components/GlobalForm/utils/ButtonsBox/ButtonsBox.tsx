import { Wrap } from "./ButtonsBox.styled";
import {
  GlobalButton,
  GlobalButtonProps,
} from "../../../GlobalButton/GlobalButton";

export interface ButtonsBoxProps {
  reset: GlobalButtonProps;
  submit: GlobalButtonProps;
}

export const ButtonsBox = ({ reset, submit }: ButtonsBoxProps) => {
  return (
    <Wrap>
      <GlobalButton {...reset} />
      <GlobalButton {...submit} />
    </Wrap>
  );
};
