import styled from "styled-components";

export const SearchBarInput = styled.input`
  width: 100%;
  height: 24px;
  background: none;
  border: 0px;
  outline: none;
  color: gray;
`;

export const SearchBarContainer = styled.form`
  width: 260px;
  height: 35px;
  border-radius: 5px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  padding-right: 24px;

  ${SearchBarInput}:focus & {
    border: 1px solid black;
    background-color: white;
  }
`;

export const SearchBarIcon = styled.div`
  width: 13px;
  height: 13px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
  color: gray;

  ${SearchBarInput}:focus & {
  }
`;
