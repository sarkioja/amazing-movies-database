import React, { useState, useEffect, Fragment }  from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import {useParams} from "react-router-dom";

import { MovieDetails } from '../services/Movies'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import MovieContainer from '../components/layout/MovieContainer';
import Footer from '../components/layout/Footer';

function Movie () {  
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      /* setIsLoading(true); */
      const data = await MovieDetails(movieId)

      setMovie(data);
      /* setIsLoading(false); */
    }

    fetchData();

  }, []); 

  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>
        <ErrorBoundary FallbackComponent={ErrorFallback}>

          <MovieContainer data={ movie } />
        
        </ErrorBoundary>
      <Footer />
    </Fragment>
  )
}

export default Movie
