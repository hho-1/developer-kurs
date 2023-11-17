import styled, {css} from "styled-components"

export const Links = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:hover {
    font-weight: 700;
  }

  ${({react}) => react && css`
    background-color: black;
    color: #61dbfb;
    padding: 0%.5rem;
    margin-top: 1rem;
  `}
`;