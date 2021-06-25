import React, { useState, useEffect } from "react";
import {
  SectionContainer,
  Container,
  H2,
  Posts,
  SeeMore,
  Link,
  Svg,
} from "./Styles";
import { Post } from "./../../molecules/index";

export const LastPosts = ({ url }) => {
  const [proyectos, setProyectos] = useState([]);
  const { REACT_APP_TOKEN_GITHUB } = process.env;

  useEffect(() => {
    const fetchBusinesses = () => {
      return fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: REACT_APP_TOKEN_GITHUB,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((rcvdBusinesses) => {
          let filter = rcvdBusinesses.filter((a) => a.fork === false);
          setProyectos(sliceElements(sortBy(filter, "created_at"), 5));
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchBusinesses();
  }, [url]);

  const sortBy = (list, element) => {
    return list.sort((a, b) => {
      return new Date(b[element]) - new Date(a[element]);
    });
  };
  const sliceElements = (list = [], end = 1) => {
    return list.slice(0, end).map((element) => {
      return element;
    });
  };

  return (
    <SectionContainer className="pattern">
      <Container>
        <H2>Últimas Publicaciones</H2>

        <Posts>
          {proyectos?.map((item, index) => {
            return (
              <Post
                key={index}
                url={item.html_url}
                name={item.name}
                created={item.created_at}
              ></Post>
            );
          })}
        </Posts>

        <SeeMore>
          <Link href="https://github.com/acalderono" rel="noopener">
            <span>Ver más</span>
          </Link>
        </SeeMore>
        {/* <SeeMore href="https://github.com/acalderono" name="Ver más" /> */}
      </Container>
    </SectionContainer>
  );
};

export default LastPosts;
