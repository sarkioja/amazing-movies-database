import styled, { keyframes } from "styled-components";

import {Spinner3 as Spinner} from '@styled-icons/evil/Spinner3'

export const List = styled.ul`
  list-style-type: none;
  padding: 0 1em;
`

export const Loading = styled.div`
  height: 80vh;
  margin: 0 auto;
  text-align: center;
`


const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled(Spinner)`
  animation: 0.7s linear ${spin} infinite;   
  color: black;
  height: 2em;
`

export const NoResult = styled.p`
  padding: 1em 2em;
`