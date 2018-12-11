# 01 Hello React

In this sample we will create a react component and connect it with the DOM via react-dom.

We will take a startup point sample _00 Genesis_.

Summary steps:

- Install react and react-dom.
- Install react and react-dom TypeScript definitions.
- Update the index.html to create a placeholder for the react components.
- Create a simple react component.
- Wire up this component by using react-dom.

## Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v8.9.4 or higher) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running `node -v` and `npm -v`
in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Copy the content of the `00 Boilerplate` folder to an empty folder for the sample.

- Install the npm packages described in the [./package.json](./package.json) and verify that it works:

 ```bash
 npm install
 ```

- Install `react` and `react-dom` libraries as project dependencies.

 ```bash
 npm install react react-dom --save
 ```

- Install also the typescript definitions for `react` and `react-dom`
but as dev dependencies.

 ```bash
 npm install @types/react @types/react-dom --save-dev
 ```

- Update [src/index.html](./src/index.html) to create a placeholder for the react components.

_[src/index.html](./src/index.html)_
```diff
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>
</head>
<body>
- <h1>React TypeScript by Example</h1>
- <script src="index.ts"></script>
+ <div id="root"></div>
+ <script src="index.tsx"></script>
</body>
</html>
```

- Create a simple react component (let's create it within a new file called `hello.tsx` in `src`folder).

_[src/hello.tsx](./src/hello.tsx)_
```tsx
import * as React from 'react';

export const HelloComponent: React.FunctionComponent<{}> = () => {
  return (
    <h2>Hello, React!</h2>
  );
}
```

- Wire up this component by using `react-dom` under [src/index.tsx](./src/index.tsx) (we have to rename
  this file extension from `ts` to `tsx` and replace the content).

_[src/index.tsx](./src/index.tsx)_
```diff
- document.write('Hello from index.ts!');

+ import * as React from 'react';
+ import * as ReactDOM from 'react-dom';

+ import { HelloComponent } from './hello';

+ ReactDOM.render(
+   <HelloComponent/>,
+   document.getElementById('root')
+ );
```

- Start the example:

 ```bash
 npm start
 ```