import {
  SectionContainer,
  Wrapper,
  H2,
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
        <H2>
          Hola,
          <Span>Soy {name}</Span>
          👋🏻
        </H2>
        {/* <p className="text-gray-600 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam
          veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi,
          culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus
          ipsum quae.
        </p> */}

        <Container>
          <ContainerDiv>
            <SubDiv>
              {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">
                KR
              </span> */}
              <Logo
                src={avatar}
                alt={name}
                unselectable="on"
                // className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </SubDiv>
          </ContainerDiv>
        </Container>
      </Wrapper>
    </SectionContainer>
  );
};

export default Me;
