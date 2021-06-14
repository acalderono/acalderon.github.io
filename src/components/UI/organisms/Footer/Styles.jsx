import styled from "styled-components";

const theme = {
  twRingOffsetWidth: "0px",
  twRingOffsetColor: "#fff",
  twRingColor: "rgba(59, 130, 246, 0.5)",
  twRingOffsetShadow: "0 0 #0000",
  twRingShadow: "0 0 #0000",
  twShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  twBorderOpacity: "1",
  twBgOpacity: "1",
  textWhite: "rgba(255,255,255,1)",
  bgWhite: "rgba(255,255,255,1)",
  textGreen600: "rgba(5, 150, 105, 1)",
  textGray400: "rgba(156,163,175,1)",
  textGray800: "rgba(31,41,55,1)",
  bgGray900: "rgba(17,24,39,1)",
  bgGreen500: "rgba(16,185,129,1)",
};
export const FooterContainer = styled.footer`
  background-color: ${theme.bgWhite};
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, ${theme.twBgOpacity});
  box-shadow: ${theme.twRingOffsetShadow}, 0 0 #0000, ${theme.twRingShadow},
    0 0 #0000, ${theme.twShadow};
  border-top-width: 4px;
  border-color: ${theme.textGreen600};
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
  color: ${theme.textGray400};
  font-size: 0.9rem;
`;
