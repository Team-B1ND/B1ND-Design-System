import { CSSObject } from "styled-components";

export interface ButtonProps {
  type: ButtonType;
  style?: CSSObject;
  children: string;
}

export type ButtonType =
  | "agree"
  | "agreed"
  | "disagree"
  | "disagreed"
  | "cancel";
