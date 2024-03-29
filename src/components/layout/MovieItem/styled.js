import styled from "styled-components";

import { FavoriteBorder as Favorite } from "@styled-icons/material-rounded/FavoriteBorder"
import { Favorite as FavoriteFull } from "@styled-icons/material/Favorite"
import { WatchLater as Later } from '@styled-icons/material-outlined/WatchLater'
import { WatchLater as LaterFull } from '@styled-icons/material/WatchLater'


export const ListItens = styled.li`
  background-color: #f7f7f7;
  margin: 0.5em 0.1em;
`

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  max-height: 175px;
  transition: opacity .2s ease-in-out;  
  padding: 0.25em 0;

  &:hover {
    opacity: 0.6;
  }
`

export const Image = styled.img`
  border-radius: 5px;
  height: 135px;
  width: 92px;
`

export const Text = styled.div`
  padding: 0 0.5em 0.5em 1em;
`

export const Title = styled.h3`
  font-weight: 400;
`

export const Year = styled.span`
  color: #aaa; 
  font-size: 0.95em;
  font-weight: 300;
`

export const Description = styled.p`
  color: #999;
  font-size: 0.9em;
  padding: 0.5em 0.25em 0.25em 0;
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 0;
  padding: 0.5em;
  margin-top: 0.5em;
`

export const Button = styled.button`
  background: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  color: ${props => props.color};
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8em;
  margin: 0 0.5em;
  padding: 0.5em 1em;
  transition: opacity .2s ease-in-out;  

  &:hover {
    opacity: 0.6;
  }

  ${({ disabled }) => disabled && `
    cursor: default;
    
    &:hover {
      opacity: 1;
    }
  `}
`


export const FavIcon = styled(Favorite)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`

export const FavIconFull = styled(FavoriteFull)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`

export const LaterIcon = styled(Later)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`

export const LaterIconFull = styled(LaterFull)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`