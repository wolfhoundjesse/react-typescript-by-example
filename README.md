# React TypeScript by Example

First and foremost, much of the work here has been derived from [Lemoncode's awesome repo](https://github.com/Lemoncode/react-typescript-samples). 

## About this Project

I spent three years growing alongside Angular and the tooling involved. The experience developing with TypeScript in Visual Studio Code was sublime (ha!), and so I've assembled this repo, with inspiration, to aid others who wish to utilize TypeScript's superpowers when writing React apps. To keep it as simple as possible, `parcel-bundler` provides a truly zero-configuration process.

*Previous React experience is **not** required.*

Each numbered folder will build on the previous folder. This means the instructions in each will closely resemble, "This example builds on _XX Name_. To begin, copy _XX Name_ into a new location and run `npm install`. There will _definitely_ be consistency errors that will be cleaned up over time. 

## Caveats

The examples you find here are not _the way React TypeScript projects are done_; they're done the way that _I do them_. To quote DrivenData, ["Nothing here is binding."](https://drivendata.github.io/cookiecutter-data-science/#nothing-here-is-binding)

### State Management

One of the most time consuming aspects of this project is going to be including various state management libraries/methodologies. You won't see that here for a while, and when I get there, there's no gaurantee you'll see your favorite flavor right away.

---

## Getting Started

1. Install [NodeJS](http://www.nodejs.org)  
2. Download this repo
5. Open the command line of your choice and cd to a sample directory within this repo on your machine  
6. `npm install` - Installs packages
7. `npm start` - Builds the project and launch a lite web server from parcel.
8. Navigate to [http://localhost:1234/](http://localhost:1234/) if your browser doesn't open automatically.

---

## Examples

### 00 Genesis

A one-file introduction to TypeScript, and Parcel will take care of the install for you.

### 01 Hello React

Your first Hello World (actually, Hello, React!) written in React and TypeScript. Congrats!

### 02 Components

Break apart this tiny app to establish a componet pattern that will become synonymous to the way you work with React.