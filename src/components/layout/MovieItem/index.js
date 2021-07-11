import React from 'react'
import { useHistory } from "react-router";

import * as S from './styled'

function MovieItem({id, poster, title, description}) {
  const history = useHistory();
  const posterPath = `https://image.tmdb.org/t/p/w92/${poster}`
  const fillerPath = `https://www.fillmurray.com/92/138`

  function handleClick() {
    history.push(`/movie/${id}`);
  }

  return (
      <li key={id}>
        <S.Item>
          <img src={ poster ? posterPath : fillerPath} /> 

          <a onClick={ handleClick }>
            <h3> {title} </h3>
            <p> {description} </p>
          </a>
        </S.Item>
      </li> 
  )
}

export default MovieItem