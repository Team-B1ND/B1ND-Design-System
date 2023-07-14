import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonType } from "./types";

export const ButtonContainer = styled.button<{ ButtonColor: ButtonType }>`
  width: 80px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  user-select: none;
  cursor: pointer;
  outline: none !important;
`;

const getColor: Record<ButtonType, FlattenSimpleInterpolation> = {
  agree: css`
    color: #fff;
    background-color: rgba(0, 103, 188, 0.85);
  `,
  agreed: css`
    color: rgba(0, 103, 188, 0.85);
    background-color: #fff;
  `,
  disagree: css`
    color: #212529;
    background-color: #fff;
  `,
  disagreed: css`
    color: rgba(0, 0, 0, 0.85);
    background-color: #fff;
    border-radius: 5px;
  `,
  cancel: css`
    height: 30px;
    border-radius: 10px;
    color: #fff;
    background-color: #ff6b6b;
  `,
};
