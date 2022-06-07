import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: 2/1/3/3;
`;

export const FormWrap = styled.div`
  border-radius: 12px;
  box-shadow: 2px 2px 8px 2px #30dafb;
  padding: 36px 24px;
  width: 80%;
`;

const generalStyle = css`
  padding: 12px;
  margin: 12px 0;
`;

export const InputsWrap1 = styled.div`
  ${generalStyle}
  border: 2px solid lime;
  grid-area: 1/1/2/3;
`;

export const InputsWrap2 = styled.div`
  ${generalStyle}
  border: 2px solid red;
`;

export const InputsWrap3 = styled.div`
  ${generalStyle}
  border: 2px solid gold;
`;

export const InputWrap1 = styled.div`
  ${generalStyle}
  border: 2px solid #003388;
`;
export const InputWrap2 = styled.div`
  ${generalStyle}
  border: 2px solid #880033;
`;
export const InputWrap3 = styled.div`
  ${generalStyle}
  border: 2px solid green;
`;
