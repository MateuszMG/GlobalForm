import styled from "styled-components";

export const Wrap = styled.div``;

export const Button = styled.button`
  background-color: #000;
  border-radius: 8px;
  border: none;
  box-shadow: 1px 1px 3px 1px #30dafb;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  margin: 6px 12px;
  padding: 8px 32px;
  transition: 0.3s;

  &:hover {
    box-shadow: 2px 2px 3px 3px #30dafb;
  }
  &:focus {
    box-shadow: 0 0 3px 1px #30dafb;
  }
`;
