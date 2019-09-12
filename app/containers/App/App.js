import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import PopularPage from 'containers/PopularPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - Movie Info"
      defaultTitle="Movie Info Application"
    >
      <meta name="description" content="Movies Info application" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={PopularPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
