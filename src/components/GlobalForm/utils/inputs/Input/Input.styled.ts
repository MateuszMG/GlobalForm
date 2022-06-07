import styled, { css } from "styled-components";

export const defaultInputStyle = css`
  background-color: #000;
  border-radius: 8px;
  border: none;
  color: #30dafb;
  margin: 8px;
  padding: 8px;
  text-indent: 2px;
  transition: box-shadow 0.2s;
  width: 100%;

  &::placeholder {
    color: #30dafb;
    font-style: italic;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  &:focus {
    box-shadow: 0 0 5px 2px #30dafb;
    outline: none;
    text-indent: 6px;
    background-color: #222;
  }

  &:hover {
    background-color: #222;
  }
`;

export const InputTag = styled.input`
  ${defaultInputStyle}
`;
