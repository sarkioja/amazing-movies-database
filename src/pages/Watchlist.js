import React, { Fragment, useContext }  from 'react';
import {ErrorBoundary} from 'react-error-boundary'

import { StateContext } from '../state'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import Footer from '../components/layout/Footer';
import MovieItem from '../components/layout/MovieItem'

function Watchlist () {  
  const {listItems} = useContext(StateContext)



  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <h1> Watchlist </h1>

          { 
            listItems.map((item, i) => (
              <MovieItem 
                key={i} 
                id={item.id} 
                poster={item.poster} 
                title={item.title} 
                year={item.year}
                description={item.description} 
              />
            )) 
          }
        </ErrorBoundary>
      <Footer />
    </Fragment>
  )
}

export default Watchlist
