import styled from "styled-components";
import theme from "../../../styles/theme";

export const ItemContainer = styled.a`
  display: block;
  margin-bottom: 2rem;
  max-width: 42rem;
  width: 100%;
  background-color: ${theme.colors.brand[900]};
  border-top-width: 4px;
  border-color: ${theme.colors.brand2[100]};
  border-radius: 0.375rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
export const H3 = styled.h3`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: ${theme.colors.secondary[100]};
`;

export const SpanTime = styled.span`
  display: block;
  color: ${theme.colors.secondary[900]};
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const Post = ({ url, name, created }) => {
  return (
    <ItemContainer href={url} rel="noopener">
      <Item>
        <H3>{name}</H3>
        <SpanTime>{created}</SpanTime>
      </Item>
    </ItemContainer>
  );
};

export default Post;
