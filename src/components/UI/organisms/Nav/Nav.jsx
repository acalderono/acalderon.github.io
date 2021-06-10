import { Container, Link } from "./Styles";

export const Nav = (username = "acalderono", isDark = true) => {
  const social = [
    {
      name: `https://twitter.com/${username}`,
      icon: "fab fa-twitter",
      rel: "noopener noreferrer",
    },
    {
      name: `https://github.com/${username}`,
      icon: "fab fa-github",
      rel: "noopener noreferrer",
    },
    {
      name: `https://linkedin.com/in/${username}`,
      icon: "fab fa-linkedin",
      rel: "noopener noreferrer",
    },
    {
      name: `mailto:angel@acalderon.dev"}`,
      icon: "far fa-envelope",
      rel: "",
    },
  ];

  return (
    <Container className="icons-social">
      {social?.map((rs, i) => {
        return (
          <Link key={i} rel={rs.rel} href={rs.name}>
            <i className={rs.icon}></i>
          </Link>
        );
      })}
    </Container>
  );
};

export default Nav;
