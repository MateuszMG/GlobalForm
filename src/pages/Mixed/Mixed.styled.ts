import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const FormWrap = styled.div`
  border-radius: 12px;
  box-shadow: 2px 2px 8px 2px #30dafb;
  padding: 36px 24px;
  width: 900px;
`;

export const InputWrap = styled.div`
  padding: 12px;
`;

export const InputsWrapMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80vw;
`;

export const InputsWrapFiles = styled.div`
  border-bottom: 1px solid #30dafb;
  border-top: 1px solid #30dafb;
  padding: 24px;
  margin: 24px;
`;

export const InputsWrapPagination = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 80vw;
  padding: 12px;
`;
