import { SectionContainer, Wrapper, Paragraph, Link, H2 } from "./Styles";
import { Span } from "./../../atoms/index";

export const AboutMe = () => {
  return (
    <SectionContainer className="pattern">
      <Wrapper>
        <H2>Sobre mí</H2>
        <Paragraph>
          ¡Hola 🙋🏻‍♂️! <Span>Soy Ángel</Span>
          , me considero una persona autodidacta que le gusta aprender
          diferentes tecnólogias.
          <br />
          <br />
          Cree el portafolio con el fin de poder ir registrando las cosas que
          voy haciendo y subiendo a mi
          <Link rel="noopener noreferrer" href="https://github.com/acalderono">
            GitHub
            <i className="fab fa-github"></i>.
          </Link>
        </Paragraph>
      </Wrapper>
    </SectionContainer>
  );
};

export default AboutMe;
