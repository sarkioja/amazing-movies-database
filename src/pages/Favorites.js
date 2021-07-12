import React, { Fragment, useContext }  from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import { Toaster } from 'react-hot-toast';

import { StateContext } from '../state'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import Container from '../components/layout/Container'
import Footer from '../components/layout/Footer';
import MovieItem from '../components/layout/MovieItem'

function Favorites () {  

  const Favs = () => {
    const { favorites } = useContext(StateContext)
    
    if (favorites.length == 0) {
      return <div> No favorites here yet. </div>
    }

    return (
      favorites.map((item, i) => (
        <MovieItem 
          key={i} 
          id={item.id} 
          poster={item.poster} 
          title={item.title} 
          year={item.year}
          description={item.description} 
          hideActions={true}
        />
      )) 
    )
  }

  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Toaster position="top-right" />

          <Container title="Favorites">
            <Favs />
          </Container>

        </ErrorBoundary>
      <Footer />
    </Fragment>
  )
}

export default Favorites
