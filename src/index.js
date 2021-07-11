import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Movie from './pages/Movie';
//import NotFound from './pages/NotFound';

import './static/styles/index.css';

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:movieId" component={Movie} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));