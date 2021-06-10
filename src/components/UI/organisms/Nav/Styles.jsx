import styled from "styled-components";

const theme = {
  textGreen600: "rgba(5, 150, 105, 1)",
  textGray800: "rgba(31,41,55,1)",
  textGray600: "rgba(113, 128, 150, 1)",
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${(props) => (props.dark ? theme.textGray800 : theme.textGray600)};
  &:hover {
    color: ${theme.textGreen600};
  }
`;
