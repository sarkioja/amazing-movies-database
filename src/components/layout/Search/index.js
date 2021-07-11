import React, { useContext, Fragment } from 'react';

import { SearchContext } from '../../core/SearchContext'

import * as S from './styled'

function Search() {
  const { query, setQuery } = useContext(SearchContext)
  const { setSearch } = useContext(SearchContext);
  const { isLoading, setIsLoading } = useContext(SearchContext); 


  function handleSubmit(event, query) {
    event.preventDefault();

    setSearch(query)
  }

  return (
    <Fragment>
      <S.SearchForm onSubmit={event => handleSubmit(event, query) }>
        <S.SearchInput
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value) }
          placeholder="Search for your favourite movies"
        />
        <S.SearchButton type="submit"> 
          { isLoading ? <S.LoadingIcon /> : <S.SearchIcon /> } 
         </S.SearchButton>
      </S.SearchForm>
    </Fragment>
  )
}

export default Search