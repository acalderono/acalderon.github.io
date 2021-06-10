import React, { useState, useEffect } from "react";
import {
  SectionContainer,
  Container,
  H2,
  Wrapper,
  ItemContainer,
  Item,
  H3,
  SpanTime,
  SeeMore,
  Link,
} from "./Styles";
// import { SeeMore } from "./../../molecules/index";

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

        <Wrapper>
          {proyectos?.map((item, index) => {
            return (
              <ItemContainer key={index} href={item.html_url} rel="noopener">
                <Item>
                  <H3>{item.name}</H3>
                  <SpanTime>{item.created_at}</SpanTime>
                </Item>
              </ItemContainer>
            );
          })}
        </Wrapper>

        <SeeMore>
          <Link href="https://github.com/acalderono" rel="noopener">
            <span>
              Ver más<i className="ml-2 fas fa-arrow-right"></i>
            </span>
          </Link>
        </SeeMore>
        {/* <SeeMore href="https://github.com/acalderono" name="Ver más" /> */}
      </Container>
    </SectionContainer>
  );
};

export default LastPosts;
