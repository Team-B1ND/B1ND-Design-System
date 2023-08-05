import { css } from "styled-components";
import { FlexProps } from "./types";

export const Flex = ({
  alignItems,
  flexDirection,
  justifyContent,
}: FlexProps) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};
