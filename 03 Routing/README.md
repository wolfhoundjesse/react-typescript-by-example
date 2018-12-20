# 03 Navigation

In this sample we will create a clients page, adding navigation using react-router.

This example builds on *02 Components*.

## Summary

- Install react-router and typings.
- Create `ClientsPage` component.
- Update `Header` component.
- Create `AppRouter` component.
- Update `App`.
- Update `index.tsx`.

## Steps to build it

- Copy the content of the `02 Components` folder to an empty folder for the sample.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm i
 ```

- Install `react-router-dom` and typings.

```bash
npm i react-router-dom
npm i -D @types/react-router-dom
```

- Add the  `ClientsPage` component.

### _[src/clients/clients.tsx](./src/clients/clients.tsx)_
```javascript
import * as React from 'react';

export const ClientsPage: React.FunctionComponent<{}> = () => {
  return (
    <div className="wrapper">
      <h1 className="header jumbotron text-center mb-2">
        Clients
      </h1>
      <div className="content">
        <h3 className="text-justify">
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laborum obcaecati facilis adipisci consectetur aperiam. Repudiandae, modi ducimus quae, non nam minima expedita alias corporis unde in vero ut minus!
            Dolorem quia dicta temporibus facere reiciendis, totam, consectetur quo debitis autem assumenda ipsa nam commodi error atque dolore explicabo repellendus voluptate? Doloremque ducimus eius at molestiae soluta veritatis debitis unde!
            Dicta asperiores soluta odit, quae, dolore libero, accusantium rem voluptatem beatae expedita dolor. Labore eos suscipit et aliquam sit saepe eligendi necessitatibus illum! Doloremque veritatis minus sunt facere explicabo magni.
            Sunt veniam, ea harum numquam totam explicabo perferendis unde libero! Molestias assumenda voluptate doloribus sapiente, rem dolores labore magnam incidunt accusantium dignissimos tempore tenetur perspiciatis aspernatur eius cum mollitia placeat.
          </small>
        </h3>
      </div>
    </div>
  );
}
```

- And its `index.ts` file.

### _[src/clients/index.ts](./src/clients/index.ts)_
```javascript
export * from './clients';
```

- Update the `Header` component to add links to navigate other pages:

### _[src/common/header.tsx](./src/common/header.tsx)_
```diff
import * as React from 'react';
+ import { Link } from 'react-router-dom';

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="">React + Typescript</a>
      <button className="navbar-toggler" 
        type="button" 
        data-toggle="collapse"
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
-           <a className="nav-link" href="">About <span className="sr-only">(current)</span></a>
+           <Link to="/about" className="nav-link">About</Link>  
          </li>
+         <li className="nav-item">
+           <Link to="/clients" className="nav-link">Clients</Link>  
+         </li>
        </ul>
      </div>
    </nav>
  )
}
```

- Add the `AppRouter` component where we define routes:

### ./src/router.tsx
```javascript
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App } from './app';
import { AboutPage } from './about';
import { ClientsPage } from './clients';

export const AppRouter: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <React.Fragment>
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/clients" component={MembersPage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}
```

  - We will always render App component because we need the header to be always visible. For that reason, we add a Route for App component without path, enclosed within a div.
  - Switch component is used to group routes. It will decide which component is rendered after rendering App component. The first route that matches current path has the component that will be rendered.
  - Because a `<Router>` can only contain one child element, we've wrapped our routes in a `<React.Fragment>` to prevent adding unneccesary elements to the DOM.
  - Finally, a route for each path is added, specifying the component that should be rendered in each case.

---

- Update `App`. We will remove the div enclosing `Header` because we have already added it in `AppRouter`:

### _[src/app.tsx](./src/app.tsx)_
```diff
import * as React from 'react';
import { Header } from './common';
- import { AboutPage } from './about';

export const App: React.FunctionComponent<{}> = () => {
  return (
-   <div>
      <Header />
-     <AboutPage />
-   </div>
  );
}
```

- And finally, update main file:

### _[src/index.tsx](./src/index.tsx)_
```diff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
- import {App} from './app';
+ import { AppRouter } from './router';

ReactDOM.render(
- <App />
+ <AppRouter />
  , document.getElementById('root'));

```

- Execute the example:

 ```bash
 $ npm start
```

 ## Notes

Since TypeScript@2.6, we can use `<>` in place of `<React.Fragment>`. 