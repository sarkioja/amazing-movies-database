import React, { useContext } from 'react'
import { useHistory } from "react-router";
import toast from 'react-hot-toast';

import { StateContext } from '../../../state'

import * as S from './styled'

function MovieItem({id, poster, title, year, description, hideActions}) {
  const {favorites, setFavorite} = useContext(StateContext)
  const {listItems, setListItem} = useContext(StateContext)
  const history = useHistory();
  const posterPath = `https://image.tmdb.org/t/p/w92/${poster}`
  const fillerPath = `https://www.fillmurray.com/92/138`
  let isFavorite = false;
  let isListItem = false;

  favorites.map(item => {
    item.id == id ? isFavorite = true : ''
  })

  listItems.map(item => {
    item.id == id ? isListItem = true : ''
  })

  function handleClick() {
    history.push(`/movie/${id}`);
  }

  const clampText = (text) => {
    let maxLength = 200;
    let clamp = text.match(/.{1,200}(\s|$)/g)

    if (text.length > maxLength) {
      return `${clamp[0]}...`
    }

    return text
  }

  const handleFav = (fav) => {
    setFavorite([...favorites, fav])
    toast.success('Movie marked as favorite.');
  }

  const handleList = (item) => {
    setListItem([...listItems, item])
    toast.success('Movie saved to Watchlist.');
  }

  const Actions = () => {
    if (hideActions) return ''

    return (
      <S.Actions>  

        {
          isListItem ? (
            <S.Button color="#000080" disabled >
              <S.LaterIconFull color="#000080"/>
              Added
            </S.Button>
          ) : (
            <S.Button color="#000080" onClick={ () => handleList({id, poster, title, year, description}) } >
              <S.LaterIcon color="#000080"/>
              Watch Later
            </S.Button>
          )
        }


        {
          isFavorite ? (
            <S.Button color="red" disabled > 
              <S.FavIconFull color="red" />
              Saved
            </S.Button>
          ) : (
            <S.Button color="red" onClick={ () => handleFav({id, poster, title, year, description}) } > 
              <S.FavIcon color="red"/>
              Add to Favorites
            </S.Button>
          )
        }


      </S.Actions>
    )
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

        <Actions />

      </S.ListItens> 
  )
}

export default MovieItem