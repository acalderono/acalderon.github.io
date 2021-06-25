import styled from "styled-components";
import theme from "../../../styles/theme";

/*
  background-color: ${(props) => props.bgColor || "rgba(16,185,129,1)"};
  color: ${(props) => props.inputColor || "white"};
*/
export const SpanName = styled.span`
  background-color: ${theme.colors.secondary[500]};
  color: ${theme.colors.brand[500]};
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  margin-left: 0.25rem;
`;

export const Span = ({ children }) => {
  return <SpanName>{children}</SpanName>;
};

export default Span;
