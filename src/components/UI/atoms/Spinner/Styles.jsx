import styled, { keyframes } from "styled-components";

export const spin = keyframes`
0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Circle = styled.div`
  border: 5px solid rgba(16, 185, 129, 1);
  border-left-color: transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;
