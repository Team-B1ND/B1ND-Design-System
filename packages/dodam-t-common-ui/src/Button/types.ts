import { CSSProperties } from "styled-components";

export interface ButtonProps {
  type: ButtonType;
  style?: CSSProperties;
  children: string;
}

export type ButtonType =
  | "agree"
  | "agreed"
  | "disagree"
  | "disagreed"
  | "cancel";
