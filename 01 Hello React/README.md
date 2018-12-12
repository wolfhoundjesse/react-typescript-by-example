# 01 Hello React

In this example we will create a react component and connect it with the DOM via react-dom.

## Summary

- Install react and react-dom.
- Install react and react-dom TypeScript definitions.
- Update index.html to create a placeholder for the react components.
- Create a simple react component.
- Wire up this component by using react-dom.

## Steps to build it

- Copy the content of the `00 Genesis` folder to an empty folder for the sample.

- Install the npm packages described in [package.json](./package.json), and verify that it works.

 ```bash
 npm install
 ```

- Install `react` and `react-dom` libraries as project dependencies.

 ```bash
 npm i react react-dom
 ```

- Install also the typescript definitions for `react` and `react-dom`
but as dev dependencies.

 ```bash
 npm i -D @types/react @types/react-dom
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

- Create a simple react component.

_[src/hello.tsx](./src/hello.tsx)_
```tsx
import * as React from 'react';

export const HelloComponent: React.FunctionComponent<{}> = () => {
  return (
    <h2>Hello, React!</h2>
  );
}
```

- Wire up this component by using `react-dom` in [src/index.tsx](./src/index.tsx) (we have to rename this file extension from `ts` to `tsx` and replace the content).

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

- Start the example.

 ```bash
 npm start
 ```