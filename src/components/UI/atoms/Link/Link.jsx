import styled from "styled-components";

export const HyperLink = styled.a`
  color: white;
  padding-left: 0.3rem;
  &:hover {
    color: rgba(5, 150, 105, 1)';
  }
`;

// aboutMe
export const Link = ({
  name = "Link",
  href,
  rel = "noopener noreferrer",
  icon = "fas fa-beer",
}) => {
  return (
    <HyperLink rel={rel} href={href}>
      {name}
      <i className={icon}></i>
    </HyperLink>
  );
};

export default Link;
