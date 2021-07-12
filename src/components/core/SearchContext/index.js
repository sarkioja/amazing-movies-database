import { createContext } from 'react';

export const SearchContext = createContext({
  query: '',
  search: '',
  data: [],
  favorites: [],
  listItems: [],
  isLoading: false,
  setQuery: () => {},
  setSearch: () => {},
  setData: () => {},
  setIsLoading: () => {},
  setFavorite: () => {},
  setListItem: () => {}
});
