import React, { useState, useEffect, Fragment }  from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import {useParams} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { MovieDetails } from '../services/Movies'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import Footer from '../components/layout/Footer';

function Movie () {  
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const posterPath = `https://image.tmdb.org/t/p/w92/${movie.poster_path}`
  const fillerPath = `https://www.fillmurray.com/92/138`
  const backdropPath = `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`

  useEffect(() => {
    const fetchData = async () => {
      /* setIsLoading(true); */
      const data = await MovieDetails(movieId)

      console.log('trouxe o filme', data);
      setMovie(data);
      /* setIsLoading(false); */
    }

    fetchData();

  }, []); 

  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Toaster position="top-right" />
        <img src={ backdropPath } /> 


          <h2> { movie.title }  </h2>
          <h3> { movie.tagline} </h3>
          <img src={ movie.poster_path ? posterPath : fillerPath} /> 

          <p> 
            { movie.overview }
          </p>
        </ErrorBoundary>
      <Footer />
    </Fragment>
  )
}

export default Movie
