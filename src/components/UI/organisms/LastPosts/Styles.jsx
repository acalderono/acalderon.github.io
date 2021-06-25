import styled from "styled-components";
import theme from "../../../styles/theme";

export const SectionContainer = styled.section`
  background-color: ${theme.colors.brand[900]};
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

export const Posts = styled.div`
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

export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colors.secondary[100]};
  &:hover {
    color: ${theme.colors.secondary[900]};
    text-decoration: underline;
  }
`;

export const Svg = styled.svg`
  height: 1rem;
  width: 1rem;
  margin-left: 1.5rem;
`;
