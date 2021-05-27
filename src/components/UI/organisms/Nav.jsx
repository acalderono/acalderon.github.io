export const Nav = (username = "acalderono", dark = "true") => {
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

  const isDark = dark ? "text-gray-800" : "text-gray-600";

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

export default Nav;
