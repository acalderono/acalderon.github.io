import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${theme.colors.brand[900]};
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-top-width: 4px;
  border-color: ${theme.colors.brand2[900]};
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  font-weight: 500;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colors.secondary[100]};
  &:hover {
    color: ${theme.colors.secondary[900]};
  }
`;

export const Svg = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;
