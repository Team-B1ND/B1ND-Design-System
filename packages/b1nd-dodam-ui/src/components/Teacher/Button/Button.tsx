import React from "react";
import { ButtonContainer, ButtonWrapperBox } from "./style";
import { ButtonProps, ButtonWrapperProps } from "./types";

export const Button = ({ type, style, children, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} customStyle={style} ButtonColor={type}>
      {children}
    </ButtonContainer>
  );
};

export const ButtonWrapper = ({ children, style }: ButtonWrapperProps) => {
  return <ButtonWrapperBox customStyle={style}>{children}</ButtonWrapperBox>;
};
