import styled from "styled-components";

export const Container = styled.div`
  padding: 0 ;
`

export const Backdrop = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  height: 200px;
`

export const Poster = styled.div`
  background-color: #fff;
  border-radius: 7px;
  height: 231px;  
  left: 1em;
  padding: 0.5em;
  position: relative;
  top: -13em;
  width: 170px;
`

export const Image = styled.img`
  border-radius: 7px;
`

export const TitleWrapper = styled.div`
  background-color: rgba(0,0,0, 0.4);
  color: #fff;
  padding: 0.5em 0 0.5em 8em;
  position: relative;
  top: -4.4em; 
`

export const Title = styled.h2`
  color: #fff;
  margin: 0;
  padding: 0 0 0 3em;
  max-width: 75%;
`

export const SloganWrapper = styled.div`
  padding: 0 0 0 8em;
  position: relative;
  top: -3em; 
`

export const Slogan = styled.p`
  color: #666;
  font-style: italic;
  font-weight: 400;
  padding: 0 0 0 4.5em;
`

export const Overview = styled.div`
  padding: 0 1.5em;
  position: relative; 
  top: -10em;
`