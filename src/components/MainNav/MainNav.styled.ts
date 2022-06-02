import styled from "styled-components";

export const MainNavWrap = styled.nav`
  border-bottom: 2px solid #30dafb;
  margin-bottom: 8px;
`;

export const MainNavList = styled.ul`
  display: flex;
  padding: 8px 12px;
`;

export const MainNavLink = styled.li`
  cursor: pointer;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    color: #30dafb;
    transform: scale(1.05);
  }
  > a {
    color: inherit;
  }
`;
