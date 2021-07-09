import React, { useState, useEffect } from 'react';
import {ErrorBoundary} from 'react-error-boundary'

import ErrorFallback from '../components/layout/ErrorFallback';
import SearchMovie from '../services/Movies'
import Movie from '../components/layout/Movie';

function ShowMovies() {
  const [data, setData] = useState([]); 
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState();

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        const movies = await SearchMovie(search)
  
        console.log('setou o data', movies);
        setData(movies.results);
      }
  
      fetchData();
    }

  }, [search]); 


  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        setSearch(query)
      }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit"> Search </button>
      </form>

      {
        query ? 
        <ul>
          {data.map((item, i) => (
            /* {<li key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w92/${item.poster_path}` } />
              {item.title}

            </li> }*/
            <Movie key={i} id={item.id} poster={item.poster_path} title={item.title} description={item.overview} />
          ))} 
        </ul> : ''
      }
    </div>

  )
}

function Home () {  
  return (
      <div>
        <h1> The Amazing Movies Database 🎬 </h1>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ShowMovies />
        </ErrorBoundary>
      </div>
  )
}

export default Home
