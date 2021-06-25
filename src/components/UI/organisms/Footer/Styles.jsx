import styled from "styled-components";
import theme from "../../../styles/theme";

export const FooterContainer = styled.footer`
  background-color: ${theme.colors.brand[900]};
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-top-width: 4px;
  border-color: ${theme.colors.brand[500]};
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

export const Div = styled.div`
  color: ${theme.colors.secondary[900]};
  font-size: 0.9rem;
`;
