import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const SocialLinksItem = styled.li`
  margin: 0px 10px 0px 10px;
`;

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--primary);
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
