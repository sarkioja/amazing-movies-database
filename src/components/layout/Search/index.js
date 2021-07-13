import React, { useContext, Fragment } from 'react';

import { StateContext } from '../../../state'

import * as S from './styled'

function Search() {
  const { query, setQuery } = useContext(StateContext)
  const { setSearch } = useContext(StateContext);
  const { isLoading } = useContext(StateContext); 


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