import React, { useEffect, useContext, Fragment } from 'react';

import * as S from './styled'

import { StateContext } from '../../../state'
import { SearchMovie } from '../../../services/Movies'

import MovieItem from '../MovieItem';

function SearchResults() {
  const { query, search, setData, setIsLoading } = useContext(StateContext)

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

  const Loading = () => {
    const { isLoading } = useContext(StateContext); 
    
    if (!isLoading) return null

    return (
      <S.Loading> 
        <S.LoadingIcon /> 
        Loading... 
      </S.Loading>
    )
  }

  const Results = () => {
    const { search, data } = useContext(StateContext); 
    
    if (!search) return null
    if (data.length == 0) {
      return (
        <S.NoResult>  No results found for {search}. </S.NoResult> 
      )
    }

    return (
          <S.List>
            {/* <h2> Search Results for {search}: </h2> */}
            { data.map((item, i) => (
              <MovieItem 
                key={i} 
                id={item.id} 
                poster={item.poster_path} 
                title={item.title} 
                year={item.release_date && item.release_date.split('-')[0]}
                description={item.overview} 
              />
            )) }
          </S.List>
    )
  }


  return (
    <Fragment>
      <Loading />
      <Results />
    </Fragment>
  )
}

export default SearchResults