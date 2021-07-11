import React from 'react'
import { useHistory } from "react-router";

import * as S from './styled'

function Hero(props) {  
  const history = useHistory();
  const { title } = props;

  function handleClick() {
    history.push('/');
  }

  return (
      <S.Header>
        <S.Title onClick={ handleClick }>
          <S.Link> { title } </S.Link>
        </S.Title>
      </S.Header> 
  )
}

export default Hero