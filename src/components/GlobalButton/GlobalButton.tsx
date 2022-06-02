import { ReactNode } from "react";
import { Button, Wrap } from "./GlobalButton.styled";

export interface GlobalButtonProps {
  isLoading?: boolean;
  isError?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset";
  children: string | ReactNode;
}

export const GlobalButton = ({
  children,
  isLoading,
  disabled,
  isError,
  onClick,
  type,
}: GlobalButtonProps) => {
  return (
    <Wrap>
      <Button
        type={type || "button"}
        onClick={() => onClick?.()}
        disabled={disabled || isLoading || isError}
      >
        {children}
      </Button>
    </Wrap>
  );
};
