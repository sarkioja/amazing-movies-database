import React from 'react'
import { useHistory } from "react-router";

import * as S from './styled'


function Menu() {
  const history = useHistory();

  function redirectFavorites() {
    history.push('/favorites');
  }

  function redirectWatchList() {
    history.push('/watchlist');
  }

  return (
    <S.Menu>
      <S.List>
      <S.ListItem> 
          <S.InternalLink to="/">
            Home
          </S.InternalLink>
        </S.ListItem>

        <S.ListItem> 
          <S.InternalLink to="/favorites">
            Favorites
          </S.InternalLink>
        </S.ListItem>

        <S.ListItem> 
          <S.InternalLink to="/watchlist">
            Watchlist
          </S.InternalLink>
        </S.ListItem>
      </S.List>
    </S.Menu>
  )
}

export default Menu