import { Container, Link, Icon } from "./Styles";

export const Nav = ({ username = "acalderono", isDark = true }) => {
  const social = [
    {
      href: `https://twitter.com/${username}`,
      name: "twitter",
      rel: "noopener noreferrer",
    },
    {
      href: `https://github.com/${username}`,
      name: "github",
      rel: "noopener noreferrer",
    },
    {
      href: `https://linkedin.com/in/${username}`,
      name: "linkedin",
      rel: "noopener noreferrer",
    },
    {
      href: `mailto:angel@acalderon.dev`,
      name: "envelope",
      rel: "",
    },
  ];

  return (
    <Container>
      {social?.map(({ href, rel, name }, i) => {
        return (
          <Link isDark key={i} href={href} rel={rel}>
            <Icon nameIcon={name}></Icon>
          </Link>
        );
      })}
    </Container>
  );
};

export const Nav2 = ({ username = "acalderono", isDark = true }) => {
  const social = [
    {
      href: `https://twitter.com/${username}`,
      icon: "fab fa-twitter",
      rel: "noopener noreferrer",
    },
    {
      href: `https://github.com/${username}`,
      icon: "fab fa-github",
      rel: "noopener noreferrer",
    },
    {
      href: `https://linkedin.com/in/${username}`,
      icon: "fab fa-linkedin",
      rel: "noopener noreferrer",
    },
    {
      href: `mailto:angel@acalderon.dev`,
      icon: "far fa-envelope",
      rel: "",
    },
  ];

  return (
    <Container className="icons-social">
      {social?.map(({ href, rel, icon }, i) => {
        return (
          <Link isDark key={i} href={href} rel={rel}>
            <i className={icon}></i>
          </Link>
        );
      })}
    </Container>
  );
};

export default Nav;
