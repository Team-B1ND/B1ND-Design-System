import React, { useState } from "react";
import {
  MenuDropdownContainer,
  MenuDropdownIcon,
  MenuDropdownItem,
  MenuDropdownItemWrap,
} from "./style";
import { MenuDropdownProps } from "./types";
import MenuDropdownImg from "../../../assets/image/MenuDropdownImg.png";

export const MenuDropdown = ({
  sizeType,
  onDelete,
  onModify,
}: MenuDropdownProps) => {
  const [close, setClose] = useState(true);

  return (
    <MenuDropdownContainer
      sizeType={sizeType}
      onClick={() => setClose((prev) => !prev)}
    >
      <MenuDropdownIcon src={MenuDropdownImg} />
      {!close && (
        <MenuDropdownItemWrap sizeType={sizeType}>
          <MenuDropdownItem onClick={() => onModify()}>수정</MenuDropdownItem>
          <MenuDropdownItem onClick={() => onDelete()}>삭제</MenuDropdownItem>
        </MenuDropdownItemWrap>
      )}
    </MenuDropdownContainer>
  );
};
