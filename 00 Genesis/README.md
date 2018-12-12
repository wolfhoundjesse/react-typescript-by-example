# 00 Boilerplate

In this example we are going to setup the basic plumbing to "build" our project and launch it in a dev server.

## Summary:

- Prerequisites: Install Node.js
- Initialize **[package.json](./package.json)** (with `npm init`)
- Install **parcel-bundler**
- Create a test ts file.
- Create a simple HTML file.

## Create a New Project

- Create and navigate to the folder where you are going to create the empty project.

- Initialize your project in the folder you created. You will be prompted to answer some questions about the project (e.g. set name to _react-typescript-by-example_).
Once you have answered all the prompts a **package.json** file we will generated.

 ```bash
 npm init
 ```

- Install **parcel-bundler** locally as a development dependency.

 ```bash
 npm i -D parcel-bundler
 ```

- Create a folder called **src** and create a basic **index.ts** file inside:

_[src/index.ts](./src/index.ts)_
 ```javascript
document.write('Hello from index.ts!');
 ```

- Create a basic **index.html** file (in **src** folder), and include the **index.ts** file as a script:

_[src/index.html](./src/index.html)_
 ```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>React TypeScript by Example</h1>
    <script src="index.ts"></script>
  </body>
</html>

 ```

 - Update _[package.json](./package.json)_ with scripts to build and run our project:

 _[package.json](./package.json)_
```diff
{
  "name": "react-typescript-by-example",
  "version": "1.0.0",
  "description": "A step-by-step example of building a React app with TypeScript",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
+   "build": "parcel build src/index.html",
+   "start": "parcel src/index.html"
  },
  "author": "Jesse M. Holmes",
  "license": "MIT",
  "devDependencies": {
    "parcel-bundler": "^1.10.3"
  }
}
```

- Start the project, and watch Parcel work its magic:

```bash
npm start
```

- Parcel installs and configures TypeScript automatically. Take a look at our updated _[package.json](./package.json)_:

_[package.json](./package.json)_
```diff
{
  "name": "react-typescript-by-example",
  "version": "1.0.0",
  "description": "A step-by-step example of bulding react apps with TypeScript and parcel",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "parcel build src/index.html",
    "start": "parcel src/index.html"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.10.3",
+    "typescript": "^3.2.2"
  }
}
```