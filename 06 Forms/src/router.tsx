import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { AboutPage } from './about';
import { ClientsContainer, ClientsList } from './clients';

export const AppRouter: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <React.Fragment>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/clients" component={ClientsList} />
          <Route exact path="/clients/details" component={ClientsContainer} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}