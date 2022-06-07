import { DefaultWrap } from "./ButtonsBox.styled";
import { StyledComponent } from "styled-components";
import {
  GlobalButton,
  GlobalButtonProps,
} from "../../../GlobalButton/GlobalButton";

export interface ButtonsBoxProps {
  buttonsComponent?: StyledComponent<"div", any, {}, never>;
  reset: GlobalButtonProps;
  submit: GlobalButtonProps;
}

export const ButtonsBox = ({
  buttonsComponent: ButtonsComponent,
  reset,
  submit,
}: ButtonsBoxProps) => {
  const Wrap = ButtonsComponent || DefaultWrap;
  return (
    <Wrap>
      <GlobalButton {...reset} />
      <GlobalButton {...submit} />
    </Wrap>
  );
};
