# 02 Components

In this example we will create a common Header component and an AboutPage react component.

This example builds on *01 Hello React*.

## Summary

- Remove `hello.tsx`.
- Update `index.html`.
- Create `components`.
- Update `index.tsx`.

## Steps to build it

- Copy the content of the `01 Hello React` folder to an empty folder for the example.

- Install the npm packages described in the `package.json` and verify that it works:

 ```bash
 $ npm install
 ```

- Remove `src/hello.tsx`.

- Update `src/index.html`.

### _[src/index.html](./src/index.html)_
```diff
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
+ <div id="root"></div>
- <div class="well">
-   <h1>React TypeScript by Example</h1>
-   <div id="root"></div>
- </div>
  <script src="./index.tsx"></script>
</body>
</html>

```

- Create the `AboutPage` component:

### *[src/about/about.tsx](./src/about/about.tsx)*
```javascript
import * as React from 'react';

export const AboutPage: React.FunctionComponent<{}> = () => {
  return (
    <div className="wrapper">
      <h1 className="header jumbotron text-center mb-2">
        About Naptown Dog Sitters
      </h1>
      <div className="content">
        <h3 className="text-justify">
          <small>
           We watch your dogs sleep, but not in a creepy way.
          </small>
        </h3>
      </div>
    </div>
  )
}
```
- Create the `Header` component:

### *[src/common/header.tsx](./src/common/header.tsx)*
```javascript
import * as React from 'react';

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <header>
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
              <a className="nav-link" href="">About <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
```

- Create `index.ts` to export all components:

### _[src/about/index.ts](./src/about/index.ts)_
```javascript
export * from './about';
```
### _[src/common/index.ts](./src/common/index.ts)_
```javascript
export * from './header';
```

- Create the `App` component:

### _[src/app.tsx](./src/app.tsx)_
```javascript
import * as React from 'react';
import { Header } from './common';
import { AboutPage } from './about';

export const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Header />
      <AboutPage />
    </div>
  );
}
```

- Add styles used in `AboutPage` component:

### _[src/styles/site.scss](src/styles/site.scss)_
```css
.wrapper {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: auto auto 50px;
  grid-template-areas:
    ". header ."
    ". content .";
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}
```

- Install bootstrap and bootswatch

```bash
npm i bootstrap bootswatch
```

- Update `index.tsx`

### *[src/index.tsx](src/index.tsx)*
```diff
import * as React from 'react';
import * as ReactDOM from 'react-dom';
- import { HelloComponent } from './hello';
+ import {App} from './app';
+ import 'bootstrap/dist/css/bootstrap.css';
+ import 'bootswatch/dist/pulse/bootstrap.css';
+ import './styles/site.scss';

ReactDOM.render(
- <HelloComponent/>,
+ <App/>,
  document.getElementById('root')
);
```

- Execute the example:

 ```bash
 $ npm start
 ```

 ## Notes

 You may have noticed when you started your project that `sass` was installed. Parcel found our `site.scss` file and did what it does best, a zero configuration install to update your project!

 The decision to include bootstrap/bootswatch in this project was simply to demonstrate that a working example can be created quickly by importing those stylesheets into `index.tsx`. There are better ways to bundle your styles for production, and we will cover that later.

 There are many file structures that work. I believe they *almost always* depend on the size of your project. For now, a simple *feature folders* approach can work for this project. We could even back up a step and leave `about.tsx` right in the src directory. Once a directory becomes cluttered, refactor. Individual thresholds will vary, but I typically try to keep folders to a 5–7 file limit.