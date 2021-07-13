import React from 'react'

import * as S from './styled'

function MovieContainer(props) {
  const backdropUrl = `https://image.tmdb.org/t/p/w780/` 
  const posterUrl= `https://image.tmdb.org/t/p/w154/`
  const {backdrop_path, poster_path, title, tagline, overview } = props.data;


  return (
    <S.Container>
      <S.Backdrop background={ props.data ? backdropUrl + backdrop_path : '' }> </S.Backdrop>

      <S.TitleWrapper>
        <S.Title> { props.data ? title : ''} </S.Title>
      </S.TitleWrapper>

      <S.SloganWrapper>
        <S.Slogan> { props.data ? tagline : ''} </S.Slogan>
      </S.SloganWrapper>

      <S.Poster>
        <S.Image src={props.data ? posterUrl + poster_path : ''} />
      </S.Poster>

      <S.Overview>
        { props.data ? overview : '' }
      </S.Overview>

    </S.Container>
  )
}

export default MovieContainer