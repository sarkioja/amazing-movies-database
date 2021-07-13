import API from './api'

export const SearchMovie = async (searchTerm) => {
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

export const MovieDetails = async (id) => {

  try {
    const url = `movie/${id}`
    const options = `?language=en-US`

    const response = await API.get(url + options)  
    return response.data

  } catch(error) {
    console.log(`Request failed ${error}`);
    return error
  }
}
