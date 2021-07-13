import React from 'react'

import * as S from './styled'

function Container(props) {
  return (
    <S.Container>
      <S.Title> {props.title} </S.Title>

      <S.List>
        {props.children}
      </S.List>

    </S.Container>
  )
}

export default Container