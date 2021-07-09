import API from './api'

const SearchMovies = async (searchTerm) => {
  try {
    const url = `search/movie?`
    const options = `language=en-US`
    const query = `&query=${searchTerm}`

    const response = await API.get(url + options + query)  
    return response.data

  } catch(error) {
    console.log(`Request failed ${error}`);
    return error
  }
}

export default SearchMovies;