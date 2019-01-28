import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { AboutPage } from './About';
import { ClientsPage } from './Clients';

export const AppRouter: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <React.Fragment>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/clients" component={ClientsPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}