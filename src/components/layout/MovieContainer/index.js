import React from 'react'

import * as S from './styled'

function MovieContainer(props) {
  const backdropUrl = `https://image.tmdb.org/t/p/w780/` 
  const posterUrl= `https://image.tmdb.org/t/p/w154/`
  const {backdrop_path, poster_path, title, tagline, overview } = props.data;


  return (
    <S.Container>
      <S.Backdrop background={backdropUrl + backdrop_path}> </S.Backdrop>

      <S.TitleWrapper>
        <S.Title> { title } </S.Title>
      </S.TitleWrapper>

      <S.SloganWrapper>
        <S.Slogan> { tagline } </S.Slogan>
      </S.SloganWrapper>

      <S.Poster>
        <S.Image src={posterUrl + poster_path} />
      </S.Poster>

      <S.Overview>
        { overview }
      </S.Overview>

    </S.Container>
  )
}

export default MovieContainer