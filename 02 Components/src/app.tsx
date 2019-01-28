import * as React from 'react';
import { Header } from './common';
import { AboutPage } from './About';

export const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header />
      <AboutPage />
    </div>
  );
}