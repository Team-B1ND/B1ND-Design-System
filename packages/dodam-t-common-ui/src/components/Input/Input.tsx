import React, { ChangeEvent } from "react";
import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { InputProps } from "./types";

export const Input = ({
  onChange = () => {},
  onSubmit = () => {},
  value,
}: InputProps) => {
  return (
    <SearchBarContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <SearchBarIcon>
        <AiOutlineSearch />
      </SearchBarIcon>
      <SearchBarInput
        placeholder="검색어 입력 후 Enter key를 누르세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchBarContainer>
  );
};
