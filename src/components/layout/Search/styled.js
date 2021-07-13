import styled, { keyframes } from "styled-components";

import {SearchAlt2 as Search} from "@styled-icons/boxicons-regular/SearchAlt2"
import {Spinner3 as Spinner} from '@styled-icons/evil/Spinner3'

export const SearchForm = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
`

export const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 1em;
  height: 4em;
  margin: 1em 0 2em 1.5em;
  ouline: none;
  padding: 1em;
  width: 100%;

  &:hover, 
  &:focus  {
    border: 1px solid #666;
    outline: none;
  }
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  height: 6em;
  left: -3.5em;
  position: relative;
  margin-bottom: 1em;
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