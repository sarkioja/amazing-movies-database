import React, { useContext } from 'react'
import { useHistory } from "react-router";

import { StateContext } from '../../../state'

import * as S from './styled'

function MovieItem({id, poster, title, year, description}) {
  const {favorites, setFavorite} = useContext(StateContext)
  const {listItems, setListItem} = useContext(StateContext)
  const history = useHistory();
  const posterPath = `https://image.tmdb.org/t/p/w92/${poster}`
  const fillerPath = `https://www.fillmurray.com/92/138`

  function handleClick() {
    history.push(`/movie/${id}`);
  }

  const clampText = (text) => {
    let maxLength = 300;
    let clamp = text.match(/.{1,300}(\s|$)/g)

    if (text.length > maxLength) {
      return `${clamp[0]}...`
    }

    return text
  }

  const handleFav = (fav) => {
    setFavorite([...favorites, fav])
  }


  const handleList = (item) => {
    setListItem([...listItems, item])
  }

  return (
      <S.ListItens key={ id }>
        <S.Item onClick={ handleClick }>
          <S.Image src={ poster ? posterPath : fillerPath} /> 

          <S.Text>
            <S.Title> 
              { title } 
              { year ? <S.Year> ({ year }) </S.Year> : '' }
            </S.Title>
            <S.Description> { clampText(description) } </S.Description>
          </S.Text>
        </S.Item>


        <S.Actions>  
          <S.Button color="#000080" onClick={ () => handleList({id, poster, title, year, description}) }>
            <S.LaterIcon color="#000080"/>
            Watch Later
          </S.Button>

          <S.Button color="red" onClick={ () => handleFav({id, poster, title, year, description}) }> 
            <S.FavIcon color="red"/>
            Add to Favorites
          </S.Button>
        </S.Actions>

      </S.ListItens> 
  )
}

export default MovieItem