import React from "react";
import { DialogButtonsContainr } from "./style";
import { DialogButtonsProps } from "./types";

export const DialogButton = ({
  children,
  mainColor = "#0067bc",
}: DialogButtonsProps) => {
  return (
    <DialogButtonsContainr mainColor={mainColor}>
      {children}
    </DialogButtonsContainr>
  );
};
