import React, { Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary'

import ErrorFallback from '../components/layout/ErrorFallback';
import Hero from '../components/layout/HeroContainer';
import Search from '../components/layout/Search';
import SearchResults from '../components/layout/SearchResults';
import Footer from '../components/layout/Footer';


function Home () {  

  return (
    <Fragment>
      <Hero title=" The Amazing Movies Database 🎬 "/>

      <ErrorBoundary FallbackComponent={ ErrorFallback }>
        <Search />
        <SearchResults />
      </ErrorBoundary>

      <Footer />
    </Fragment>
  )
}

export default Home
