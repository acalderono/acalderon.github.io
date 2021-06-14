import { Nav } from "./../Nav/index";
import { FooterContainer, Container, Wrapper, Div } from "./Styles";

export const Footer = ({ name = "Angel" }) => {
  const year = new Date();

  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <div>
            <Div>
              {name} &copy; {year.getFullYear()}
            </Div>
          </div>
          <Nav username={name} isDark></Nav>
        </Wrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
