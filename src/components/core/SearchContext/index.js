import { createContext } from 'react';

export const SearchContext = createContext({
  query: '',
  search: '',
  data: [],
  isLoading: false,
  setQuery: () => {},
  setSearch: () => {},
  setData: () => {},
  setIsLoading: () => {},
});
