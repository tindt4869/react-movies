import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import PopularPage from 'containers/PopularPage/Loadable';
import TopRatePage from 'containers/TopRatePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import InputSearch from 'containers/InputSearch';
import SearchResultPage from 'containers/SearchResultPage/Loadable';
import './style.scss';
import Navbar from 'components/Navbar';

const App = () => (
  <>
    <Navbar />
    <div className="app-wrapper">
      <Helmet
        titleTemplate="%s - Movie Info"
        defaultTitle="Movie Info Application"
      >
        <meta name="description" content="Movies Info application" />
      </Helmet>
      <InputSearch />
      <Switch>
        <Route exact path="/" component={PopularPage} />
        <Route path="/popular" component={PopularPage} />
        <Route path="/top-rate" component={TopRatePage} />
        <Route path="/search/:query" component={SearchResultPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  </>
);

export default App;
