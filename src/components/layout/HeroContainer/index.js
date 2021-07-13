import React, { Fragment } from 'react'
import { useHistory } from "react-router";
import { Toaster } from 'react-hot-toast';

import Menu from '../Menu'

import * as S from './styled'

function Hero(props) {  
  const history = useHistory();
  const { title } = props;

  function handleClick() {
    history.push('/');
  }

  return (
    <Fragment>
      <Toaster position="top-right" />

      <S.Header>
        <S.Title onClick={ handleClick }>
          <S.Link> { title } </S.Link>
        </S.Title>
      </S.Header> 

      <Menu />
    </Fragment>

  )
}

export default Hero