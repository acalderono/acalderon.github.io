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

  useEffect(() => {
    const fetchBusinesses = () => {
      return fetch(url, {
        method: "GET",
        headers: new Headers({
          Authorization: "token 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",
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
            <span>
              Ver más
              {/* <Svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-right"
                class="svg-inline--fa fa-arrow-right fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                ></path>
              </Svg> */}
            </span>
          </Link>
        </SeeMore>
        {/* <SeeMore href="https://github.com/acalderono" name="Ver más" /> */}
      </Container>
    </SectionContainer>
  );
};

export default LastPosts;
