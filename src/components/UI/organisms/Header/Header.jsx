import { Nav } from "./../Nav/index";

import { HeaderContainer, Container, Wrapper, Link, Span, Svg } from "./Styles";

export const Header = ({
  name = "Angel",
  hostname = "http://localhost:3000",
}) => {
  console.log(name, hostname);
  return (
    <HeaderContainer>
      <Container>
        <Wrapper>
          <div>
            <Link href={hostname}>
              <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </Svg>
              <Span>{name}</Span>
            </Link>
          </div>
          <Nav username={name}></Nav>
        </Wrapper>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
