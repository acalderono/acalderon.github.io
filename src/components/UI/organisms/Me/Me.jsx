import {
  SectionContainer,
  Wrapper,
  Title,
  Container,
  ContainerDiv,
  SubDiv,
  Logo,
} from "./Styled";
import { Span } from "./../../atoms/index";

export const Me = ({ name = "Angel", avatar = "https://localhost:3000" }) => {
  return (
    <SectionContainer className="pattern">
      <Wrapper>
        <Title>
          Hola,
          <Span>Soy Ángel</Span>👋🏻
        </Title>
        {/* <p className="text-gray-600 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam
          veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi,
          culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus
          ipsum quae.
        </p> */}

        <Container>
          <ContainerDiv>
            <SubDiv>
              <Logo src={avatar} alt={name} unselectable="on" />
            </SubDiv>
          </ContainerDiv>
        </Container>
      </Wrapper>
    </SectionContainer>
  );
};

export default Me;
