import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StateContext } from './state'

import Home from './pages/Home';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites';
import Watchlist from './pages/Watchlist';

//import NotFound from './pages/NotFound';

import './static/styles/index.css';

function AppRouting() {
  const localFavs = localStorage.getItem('amd:favorites') ? JSON.parse(localStorage.getItem('amd:favorites')) : []
  const localList = localStorage.getItem('amd:watchLater') ? JSON.parse(localStorage.getItem('amd:watchLater')) : []

  const [query, setQuery] = useState('');
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorite] = useState(localFavs)
  const [listItems, setListItem] = useState(localList)
  const value = { query, search, data, isLoading, favorites, listItems, setQuery, setSearch, setData, setIsLoading, setFavorite, setListItem };

  useEffect(() => {
    localStorage.setItem('amd:favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('amd:watchLater', JSON.stringify(listItems))
  }, [listItems])


  return (
  <StateContext.Provider value={ value } >
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={Movie} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/watchlist" component={Watchlist} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </StateContext.Provider>
)}

ReactDOM.render(<AppRouting />, document.getElementById("root"));