import styled from "styled-components";

export const SpanGreen = styled.span`
  background-color: ${(props) => props.bgColor || "rgba(16,185,129,1)"};
  color: ${(props) => props.inputColor || "white"};
  border-radius: 0.25rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

export const Span = ({ children }) => {
  return <SpanGreen>{children}</SpanGreen>;
};

export default Span;
