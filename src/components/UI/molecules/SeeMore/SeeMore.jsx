import styled from "styled-components";
import { Link } from "./../../atoms/index";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const SeeMore = ({ name, href }) => {
  return (
    <Wrapper>
      <Link name={name} icon="fas fa-arrow-right" href={href}></Link>
    </Wrapper>
  );
};

export default SeeMore;
