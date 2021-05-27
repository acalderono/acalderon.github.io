export const AboutMe = () => {
  return (
    <section className="bg-gray-900 pattern py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white">Sobre mí</h2>
        <p className="text-gray-400 mt-4">
          ¡Hola 🙋🏻‍♂️!{" "}
          <span className="bg-green-500 text-white rounded px-1">
            Soy Ángel
          </span>
          , me considero una persona autodidacta que le gusta aprender
          diferentes tecnólogias.
          <br />
          <br />
          Cree el portafolio con el fin de poder ir registrando las cosas que
          voy haciendo y subiendo a mi
          <a
            className="mx-1 hover:text-green-600"
            rel="noopener noreferrer"
            href="https://github.com/acalderono"
          >
            GitHub
            <i className="fab fa-github"></i>.
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
