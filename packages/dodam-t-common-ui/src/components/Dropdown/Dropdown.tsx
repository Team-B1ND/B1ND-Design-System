import React from "react";
import { DropdownContainer } from "./style";
import { DropdwonProps } from "./types";

const Dropdown = ({ children, onChange, style }: DropdwonProps) => {
  return (
    <DropdownContainer onChange={onChange} customStyle={style}>
      {children}
    </DropdownContainer>
  );
};

export default Dropdown;
