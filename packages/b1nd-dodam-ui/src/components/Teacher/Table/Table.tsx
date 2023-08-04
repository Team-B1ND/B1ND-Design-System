import React from "react";
import {
  TableContainer,
  TableScrollWrapperContainer,
  TBodyContainer,
  TDContainer,
  TDImageContainer,
  THContainer,
  CTHeadContainer,
  TRContainer,
} from "./style";
import {
  TableProps,
  TableScrollWrapperPrpos,
  TBodyProps,
  TDImageProps,
  TDProps,
  TheadProps,
  TRProps,
} from "./types";

export const Table = ({ children, customStyle }: TableProps) => {
  return <TableContainer customStyle={customStyle}>{children}</TableContainer>;
};

export const TableScrollWrapper = ({
  customStyle,
  children,
}: TableScrollWrapperPrpos) => {
  return (
    <TableScrollWrapperContainer customStyle={customStyle}>
      {children}
    </TableScrollWrapperContainer>
  );
};

export const THead = ({ children, customStyle }: TheadProps) => {
  return (
    <CTHeadContainer customStyle={customStyle}>{children}</CTHeadContainer>
  );
};

export const TR = ({ children, customStyle }: TRProps) => {
  return <TRContainer style={customStyle}>{children}</TRContainer>;
};

export const TH = ({ children, customStyle }: TheadProps) => {
  return <THContainer customStyle={customStyle}>{children}</THContainer>;
};

export const TD = ({ children, customStyle }: TDProps) => {
  return <TDContainer customStyle={customStyle}>{children}</TDContainer>;
};

export const TDImageWrap = ({ children, customStyle }: TDImageProps) => {
  return (
    <TDImageContainer customStyle={customStyle}>{children}</TDImageContainer>
  );
};

export const TBody = ({ children, customStyle }: TBodyProps) => {
  return <TBodyContainer customStyle={customStyle}>{children}</TBodyContainer>;
};
