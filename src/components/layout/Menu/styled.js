import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.nav`
  background-color: #333333;
  color: #ccc;
`
export const List = styled.ul`
  /* display: flex; */
  list-style-type: none;
  margin: 0 auto;
  overflow: hidden;
  padding: 1em 0;
`

export const ListItem = styled.li`
  float: left;
  margin: 0 1em;

  &:first-child {
    margin: 0 1em 0 1em ;
  }
`

export const InternalLink = styled(Link)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: opacity .2s ease-in-out;  

  &:hover {
    opacity: 0.6;
  }
`