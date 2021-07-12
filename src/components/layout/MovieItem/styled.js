import styled from "styled-components";

import { Favorite } from "@styled-icons/material/Favorite"
import { WatchLater } from '@styled-icons/material/WatchLater'

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
  top: -1em;
  padding: 0.5em 0.5em 0;
`

export const Button = styled.button`
  background: transparent;
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  color: ${props => props.color};
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8em;
  padding: 0.5em 1em;
  margin: 0 0.5em;
`

export const FavIcon = styled(Favorite)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`

export const LaterIcon = styled(WatchLater)`
  color: ${props => props.color};
  height: 1.2em;
  padding: 0 0.25em 0.25em 0.25em;
`