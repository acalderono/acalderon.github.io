import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import { Spinner } from "./../UI/Spinner";
import { Header, Me, AboutMe, LastPosts, Projects, Footer } from "../UI";

function Portfolio() {
  const [isLoading, setLoading] = useState(true);
  const [personal, setPersonal] = useState();

  const getFetchPersonal = async () => {
    let r = await fetch("https://api.github.com/users/acalderono", {
      method: "GET",
      headers: new Headers({
        Authorization: "token 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",
      }),
    });
    let personal = await r.json().then();
    setPersonal(personal);
    setLoading(false);
  };

  useEffect(() => {
    getFetchPersonal();
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
            <AboutMe></AboutMe>
            <LastPosts url={personal?.repos_url}></LastPosts>
            <Projects></Projects>
            <Footer name={personal?.login} />
          </div>
        </main>
      )}{" "}
    </>
  );
}

export default Portfolio;
