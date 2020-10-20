import React, { useState, useEffect, Children } from "react";
import "./Portfolio.css";
import { Spinner } from "./../UI/Spinner";
import { GitHub } from "../../interfaces/GitHub";

function Portfolio() {
  const [isLoading, setLoading] = useState(true);
  const [personal, setPersonal] = useState<GitHub>();

  const getPersonal = async () => {
    let r = await fetch("https://api.github.com/users/acalderono");
    let personal = await r.json();
    setPersonal(personal);
    setLoading(false);
  };

  useEffect(() => {
    getPersonal();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className="font-sans bg-white">
          <div>
            <Header name={personal?.login} hostname={window.location.origin} />
            <Me name={personal?.name} avatar={personal?.avatar_url} />
            {/* <AboutMe>
              ¡Hola 🙋🏻‍♂️! Soy Ángel Calderón, una persona autodidacta con ganas de aprender
              diferentes tecnólogias
            </AboutMe> */}
            {/* <LastPosts></LastPosts> */}
            {/*<Projects></Projects> */}
            <Footer name={personal?.login} />
          </div>
        </main>
      )}{" "}
    </>
  );
}

export const Header = (props: { name?: string; hostname?: string }) => {
  return (
    <header className="bg-white shadow border-t-4 border-green-600">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="flex items-center text-gray-800 hover:text-green-600"
              href={props.hostname}
            >
              <svg
                className="h-6 w-6 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span className="mx-3 font-medium text-sm md:text-base">
                {props.name}
              </span>
            </a>
          </div>
          <Nav username={props?.name} dark={true}></Nav>
        </div>
      </div>
    </header>
  );
};

export const Me = (props: { name?: string; avatar?: string | undefined }) => {
  return (
    <section className="bg-white mt-20">
      <div className="max-w-2xl px-6 text-center mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800">
          Hola,{" "}
          <span className="bg-green-500 text-white rounded px-1">
            Soy {props.name}
          </span>{" "}
          👋🏻
        </h2>
        {/* <p className="text-gray-600 mt-4">lorem ipsum</p> */}

        <div className="flex items-end justify-center mt-6">
          <div className="w-64 h-64 relative mb-4">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
              <span className="hidden group-hover:table-cell text-white font-bold align-middle">
                KR
              </span>
              <img
                src={props.avatar}
                alt={props.name}
                unselectable="on"
                className="object-cover object-center w-full h-full visible group-hover:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutMe = (props: { children: string }) => {
  return (
    <section className="bg-gray-800 pattern py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white">Sobre mí</h2>
        <p className="text-gray-400 mt-4">{props.children}</p>
      </div>
    </section>
  );
};

export const LastPosts = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Últimas Publicaciones
        </h2>

        <div className="flex flex-col items-center justify-center mt-6">
          <a
            className="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="#"
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h3 className="text-lg font-medium text-gray-700">
                Easy, Free Laravel CI Using GitHub Actions
              </h3>
              <span className="block text-gray-600 font-light text-sm">
                20 Jan 2020
              </span>
            </div>
          </a>

          <a
            className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="#"
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h3 className="text-lg font-medium text-gray-700">
                Pest: a delightful PHP Testing Framework
              </h3>
              <span className="block text-gray-600 font-light text-sm">
                29 Oct 2019
              </span>
            </div>
          </a>

          <a
            className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="#"
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h3 className="text-lg font-medium text-gray-700">
                Using inline SVGs in Vue components
              </h3>
              <span className="block text-gray-600 font-light text-sm">
                15 Oct 2019
              </span>
            </div>
          </a>

          <a
            className="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-green-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            href="#"
          >
            <div className="flex items-center justify-between px-4 py-2">
              <h3 className="text-lg font-medium text-gray-700">
                Acceptance Testing Laravel & VueJs Apps with Codeception
              </h3>
              <span className="block text-gray-600 font-light text-sm">
                3 Oct 2019
              </span>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center mt-12">
          <a
            className="flex items-center text-gray-600 hover:underline hover:text-gray-500"
            href="#"
          >
            <span>View More</span>

            <svg
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section className="bg-gray-800 pattern py-20">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <h2 className="text-2xl font-semibold text-white">Proyectos</h2>

        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map(() => {
              return (
                <div className="max-w-xs w-full">
                  <div className="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                    <img
                      className="object-cover h-8"
                      src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg"
                      alt=""
                    />
                  </div>
                  <a
                    href="#"
                    className="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    <div className="py-2 px-3 text-center text-sm">
                      <p className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="block text-gray-500 mt-2">
                        tailwindcomponents.com
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center mt-12">
          <a
            className="flex items-center text-white hover:underline hover:text-gray-200"
            href="#"
          >
            <span>Ver más en GitHub</span>
            <svg
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = (props: { name?: string }) => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-gray-600">&copy; {props.name}</div>
          </div>
          <Nav username={props.name} dark={false}></Nav>
        </div>
      </div>
    </footer>
  );
};

export const Nav = (props: { username?: string; dark?: boolean }) => {
  const social = [
    {
      name: `https://twitter.com/${props.username}`,
      icon: "fab fa-twitter",
      rel: "noopener noreferrer",
    },
    {
      name: `https://github.com/${props.username}`,
      icon: "fab fa-github",
      rel: "noopener noreferrer",
    },
    {
      name: `https://linkedin.com/in/${props.username}`,
      icon: "fab fa-linkedin",
      rel: "noopener noreferrer",
    },
    {
      name: `mailto:angel@acalderon.dev"}`,
      icon: "far fa-envelope",
      rel: "",
    },
  ];

  const isDark = props.dark ? "text-gray-800" : "text-gray-600";

  return (
    <div className="flex items-center -mx-2 icons-social">
      {social?.map((rs, i) => {
        return (
          <a
            key={i}
            className={`flex items-center mx-2  hover:text-green-600 ${isDark}`}
            rel={rs.rel}
            href={rs.name}
          >
            <i className={rs.icon}></i>
          </a>
        );
      })}
    </div>
  );
};

export default Portfolio;
