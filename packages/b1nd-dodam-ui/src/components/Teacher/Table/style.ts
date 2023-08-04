import styled, { CSSObject } from "styled-components";

export const TableContainer = styled.table<{ customStyle?: CSSObject }>`
  font-size: 12px;
  ${({ customStyle }) => customStyle}
`;

export const TableScrollWrapperContainer = styled.div<{
  customStyle?: CSSObject;
}>`
  overflow-y: scroll;
  ${({ customStyle }) => customStyle}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CTHeadContainer = styled.thead<{ customStyle?: CSSObject }>`
  width: 100%;
  height: 38px;

  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;

export const TRContainer = styled.tr`
  background-color: white;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const THContainer = styled.th<{ customStyle?: CSSObject }>`
  padding: 12px;
  text-align: start;

  ${({ customStyle }) => customStyle}
`;

export const TDContainer = styled.td<{ customStyle?: CSSObject }>`
  text-align: start;
  padding: 12px;
  vertical-align: middle;

  ${({ customStyle }) => customStyle}
`;

export const TDImageContainer = styled.div<{ customStyle?: CSSObject }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  ${({ customStyle }) => customStyle}
`;

export const TBodyContainer = styled.tbody<{ customStyle?: CSSObject }>`
  tr {
    &:hover {
      filter: brightness(90%);
    }
  }
  ${({ customStyle }) => customStyle}
`;
