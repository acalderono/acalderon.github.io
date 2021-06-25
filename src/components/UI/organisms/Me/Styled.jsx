import styled from "styled-components";
import theme from "./../../../styles/theme";

export const SectionContainer = styled.section`
  background-color: ${theme.colors.brand[900]};
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  color: ${theme.colors.secondary[900]};
`;

export const Paragraph = styled.p`
  color: ${theme.colors.secondary[900]};
  margin-top: 1rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ContainerDiv = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  margin-bottom: 1rem;
`;

export const SubDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 0px 20px 7px #d8d8d8;
`;

export const Logo = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  visibility: visible;
`;
