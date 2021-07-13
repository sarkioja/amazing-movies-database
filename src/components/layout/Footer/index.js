import React from 'react'

import * as S from './styled'
import logo from '../../../static/imgs/tmdb.svg'

function Footer() {
  return (
    <S.FooterContainer>

        <S.Text> 
          The Amazing Movies Database 
          <S.Disclaimer> This product uses the TMDb API but is not endorsed or certified by TMDb. </S.Disclaimer>
        </S.Text>

        <S.TmdbLogo src={logo} alt="The Movie Database Logo" /> 

    </S.FooterContainer>
  )
}

export default Footer