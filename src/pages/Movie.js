import React from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import {useParams} from "react-router-dom";

import ErrorFallback from '../components/layout/ErrorFallback';

function Movie () {  
  let { movieId } = useParams();

  return (
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <p> Página do filme </p>
          
           { movieId } 
        </ErrorBoundary>
      </div>
  )
}

export default Movie
