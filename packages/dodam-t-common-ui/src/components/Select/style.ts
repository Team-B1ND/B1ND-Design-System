import styled, { css } from "styled-components";

export const SelectContainer = styled.div<{ close: boolean }>`
  width: min-content;
  height: 35px;

  display: flex;
  align-items: center;
  padding: 0px 8px;
  border: 1px solid #dee2e6;

  border-radius: 5px;
  position: relative;
  column-gap: 15px;
  cursor: pointer;

  ${({ close }) =>
    !close &&
    css`
      border: 1px solid black;
    `}
`;

export const SelectText = styled.p`
  font-size: 14px;
  white-space: nowrap;
`;

export const SelectIcon = styled.div<{ close: boolean }>`
  width: 14px;
  height: 14px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;

  ${({ close }) =>
    !close &&
    css`
      transform: rotate(180deg);
    `}
`;

export const SelectItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 40px;
  left: 0px;

  overflow: hidden;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const SelectItem = styled.div`
  width: 100%;
  height: 35px;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  background-color: white;
  padding: 0px 10px;
  font-size: 14px;

  :hover {
    filter: brightness(90%);
  }
`;
