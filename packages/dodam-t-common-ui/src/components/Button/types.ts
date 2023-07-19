import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface ButtonProps {
  type: ButtonType;
  style?: CSSObject;
  children: string;
}

export interface ButtonWrapperProps {
  children: ReactNode;
  style?: CSSObject;
}

export type ButtonType =
  | "agree"
  | "agreed"
  | "disagree"
  | "disagreed"
  | "cancel";
