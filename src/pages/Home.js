import React, { useState, useEffect, useReducer, Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import { SearchContext } from '../components/core/SearchContext'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import Search from '../components/layout/Search';
import SearchResults from '../components/layout/SearchResults';
import Footer from '../components/layout/Footer';

/* function SearchResultsxxx() {
  const [data, setData] = useState([]); 
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setIsLoading(true);
        const movies = await SearchMovie(search)
  
        console.log('setou o data', movies);
        setData(movies.results);
        setIsLoading(false);
      }
  
      fetchData();
    }

  }, [search]); 

  function handleSubmit(event, query) {
    event.preventDefault();
    setSearch(query)
  }


  return (
    <div>
      <form onSubmit={event => handleSubmit(event, query) }>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search for your favourite movies"
        />
        <button type="submit"> Search </button>
      </form>

      {
        isLoading ? (
          <div> Loading... </div>
        ) :
        query ? 
        <ul>
          {data.map((item, i) => (
            <Movie 
              key={i} 
              id={item.id} 
              poster={item.poster_path} 
              title={item.title} 
              description={item.overview} 
            />
          ))} 
        </ul> : ''

      }
    </div>

  )
} */


function Home () {  
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const value = { query, search, data, isLoading, setQuery, setSearch, setData, setIsLoading };

  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>

      <SearchContext.Provider value={ value } >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Search />
          <SearchResults />
        </ErrorBoundary>
      </SearchContext.Provider>

      <Footer />
    </Fragment>
  )
}

export default Home
