import React, { ChangeEvent } from "react";
import { CSSObject } from "styled-components";

export interface DropdwonProps {
  children: React.ReactNode;
  style?: CSSObject;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
