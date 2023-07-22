import React from "react";
import {
  SectionHeaderContainer,
  SectionHeaderSubTitle,
  SectionHeaderTitle,
} from "./style";
import { SectionHeaderProps } from "./types";

export const SectionHeader = ({
  subTitle,
  title,
  children,
}: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderSubTitle>{subTitle}</SectionHeaderSubTitle>
      {children}
    </SectionHeaderContainer>
  );
};
