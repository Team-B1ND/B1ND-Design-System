import styled, { CSSObject } from "styled-components";

export const DropdownContainer = styled.select<{ customStyle?: CSSObject }>`
  width: 100px;
  height: 37px;
  display: inline-block;
  padding: 0.4rem 2rem 0.4rem 0.5rem;

  font-size: 0.9rem;

  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
  outline: none;
  background: url("../../assets/image/down-arrow.svg") no-repeat 90% 50%;
  background-size: 16px;
  background-color: inherit;

  ${({ customStyle }) => customStyle}

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  line-height: 1.5;

  cursor: pointer;

  &:focus {
    border-color: #c1c9d0;
  }

  &::-ms-expand {
    display: none;
  }
`;
