import React from "react";
import { ButtonContainer } from "./style";
import { ButtonProps } from "./types";

const Button = ({ type, style, children }: ButtonProps) => {
  return (
    <ButtonContainer customStyle={style} ButtonColor={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
