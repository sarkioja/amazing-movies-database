import React, { useState, useEffect, useContext, Fragment } from 'react';

import { SearchContext } from '../../core/SearchContext'
import { SearchMovie } from '../../../services/Movies'

import MovieItem from '../MovieItem';

function SearchResults() {
  const { query } = useContext(SearchContext)
  const { search } = useContext(SearchContext)
  const { data, setData } = useContext(SearchContext)
  const { isLoading, setIsLoading } = useContext(SearchContext); 

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


  return (
    <Fragment>
      {
        isLoading ? ( <div> Loading... </div> ) :
        search ? 
          ( <ul>
            { data.map((item, i) => (
              <MovieItem 
                key={i} 
                id={item.id} 
                poster={item.poster_path} 
                title={item.title} 
                description={item.overview} 
              />
            )) }
          </ul> ) : ''
      }
    </Fragment>
  )
}

export default SearchResults