import styled, { keyframes } from "styled-components";

import {SearchAlt2 as Search} from "@styled-icons/boxicons-regular/SearchAlt2"
import {Spinner3 as Spinner} from '@styled-icons/evil/Spinner3'

export const SearchForm = styled.form`
  position: relative;
  text-align: center;
  width: 100%;
`

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1em;
  height: 4em;
  margin: 1em 0.5em;
  padding: 1em;
  width: 92%;
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  height: 6em;
  left: -4.5em;
  position: relative;
`

export const SearchIcon = styled(Search)`
  color: black;
  height: 2em;
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