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
  textGreen600: "rgba(5, 150, 105, 1)",
  textGray400: "rgba(156,163,175,1)",
  textGray800: "rgba(31,41,55,1)",
  bgGray900: "rgba(17,24,39,1)",
  bgGreen500: "rgba(16,185,129,1)",
};

export const SectionContainer = styled.section`
  background-color: ${theme.bgGray900};
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const Wrapper = styled.div`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: ${theme.textWhite};
`;

export const Paragraph = styled.p`
  color: ${theme.textGray400};
  margin-top: 1rem;
`;

export const Link = styled.a`
  color: ${theme.textWhite};
  padding-left: 0.3rem;
  &:hover {
    color: ${theme.textGreen600};
  }
`;
