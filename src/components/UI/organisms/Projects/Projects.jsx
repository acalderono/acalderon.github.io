import React from "react";
import { SectionContainer, Container, H2, List, SeeMore, Link } from "./Styles";
import { Project } from "./../../molecules/index";

export const Projects = () => {
  const webProjects = {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    url: "https://acalderon.dev",
    image: "",
  };

  return (
    <SectionContainer className="pattern">
      <Container>
        <H2>Proyectos</H2>
        <List>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => {
              return (
                <Project
                  key={index}
                  image={webProjects.image}
                  name={webProjects.name}
                  url={webProjects.url}
                ></Project>
              );
            })}
          </div>
        </List>

        <SeeMore>
          <Link href="https://github.com/acalderono" rel="noopener">
            <span>
              Ver más<i className="ml-2 fas fa-arrow-right"></i>
            </span>
          </Link>
        </SeeMore>
      </Container>
    </SectionContainer>
  );
};

export default Projects;
