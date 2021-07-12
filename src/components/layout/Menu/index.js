import React from 'react'
import { useHistory } from "react-router";

/* import * as S from './styled'
import logo from '../../../static/imgs/tmdb.svg' */

function Menu() {
  const history = useHistory();

  function redirectFavorites() {
    history.push('/favorites');
  }

  function redirectWatchList() {
    history.push('/watchlist');
  }

  return (
    <div>
      <ul>
        <li onClick={redirectFavorites}> Favorites </li>
        <li onClick={redirectWatchList}> Watchlist </li>
      </ul>
    </div>
  )
}

export default Menu