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
  textGray600: "rgba(75,85,99,1)",
  textGray700: "rgba(55,65,81,1)",
  textGray800: "rgba(31,41,55,1)",
  bgGray900: "rgba(17,24,39,1)",
  bgGreen500: "rgba(16,185,129,1)",
};

export const SectionContainer = styled.section`
  background-color: ${theme.bgWhite};
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  max-width: 64rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
`;

export const ItemContainer = styled.a`
  display: block;
  margin-bottom: 2rem;
  max-width: 42rem;
  width: 100%;
  background-color: ${theme.bgWhite};
  border-top-width: 4px;
  border-color: rgba(5, 150, 105, 1);
  border-radius: 0.375rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const H3 = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${theme.textGray700};
`;

export const SpanTime = styled.span`
  display: block;
  color: ${theme.textGray600};
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.textGray600};

  &:hover {
    color: ${theme.textGreen600};
    text-decoration: underline;
  }
`;