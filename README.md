# Modern React With Redux

My journey through Stephen Grider's course on Udemy! It will consist of my notes, code that I type along with the instructor, projects guided by the course, and my own additions to the projects

##### `Originally Started: 11/21/21`

## Section 1 - Let's Dive In!

##### `Originally Started: 11/21/21`

Creating a React Project

- We use a tool called Create React App
- Can be installed easily via npm:

`npm create-react-app <app-name>`

- Since we want to utilize the features of newer JavaScript, yet the browser support for those features are poor, we make use of **Babel**
- **Babel** is a command line tool can convert any version of JavaScript to other versions (those that can be safely executed on any browser)
- create-react-app makes use of **Babel** -- and many other dependencies

### Exploring a Create-React-App Project

When we use create-react-app, the project it generates looks like the following:

Project Directory:

- src: Folder where we put all the source code we write
- public: Folder that stores static files, like images
- node_modules: Folder that contains all of our project dependencies
- package.json: Records our project dependencies and configures our project
- package-lock.json: Records the _exact_ version of packages that we install
- README.md: Instructiosn on how to use this project

### Starting and Stopping a React App

- We can start a create-react-app with: `npm start` in the project directory
  - This serves the page at `localhost:3000` typically
- We can stop a create-react-app by hitting `Ctrl + C` in the terminal where we started the app

### JavaScript Module Systems

3 easy steps to get some React content to render on our screen:

- Import the React and ReactDOM libraries
- Create a React Component
- Take the React Component and show it on the screen

Importing the Libraries

```js
import React from 'react';
import ReactDOM from 'react-dom';
```

This grabs code from the "react" folder inside the "node_modules" directory. The same with "react-dom".

This _import_ syntax is used here -- which is an ES2015 import statement. In NodeJS, we may be more used to the _require_ syntax -- which is a CommonJS import statement. They are different module systems which governs how to share code between different files.

### Displaying Content with Functional Components

What even is a React Component?

- It is a _function_ or _class_ that produces HTML to show the user (using JSX) _and_ handles feedback from the user (using Event Handlers)

Creating a Functional Component

```js
// Function with function keyword
const App = function () {
  return <div>Hi!</div>;
};

// ES2015 arrow function:
const App = () => {
  return <div>Hi!</div>;
};
```

Rendering the Component

```js
// Render the App component where the HTML element with ID "root" is in the public/index.html file
ReactDOM.render(<App />, document.querySelector('#root'));
```

## Section 2 - Building Content with JSX

## Section 3 - Communicating with Props

## Section 4 - Structuring Apps with Class-Based Components

## Section 5 - State in React Components

## Section 6 - Understanding Lifecycle Methods

## Section 7 - Handling User Input with Forms and Events

## Section 8 - Making API Requests with React

## Section 9 - Building Lists of Records

## Section 10 - Using Ref's for DOM Access

##### `Originally Started: 11/21/2021`

## Section 11 - Let's Test Your React Mastery!

## Section 12 - Udnerstanding Hooks in React

## Section 13 - Navigation From Scratch

## Section 14 - Hooks in Practice

## Section 15 - Deploying a React App

## Section 16 - On We Go...To Redux!

## Section 17 - Integrating React with Redux

## Section 18 - Async Actions with Redux Thunk

## Section 19 - Redux Store Design

## Section 20 - Navigation with React Router

## Section 21 - Handling Authentication with React

## Section 22 - Redux Dev Tools

## Section 23 - Handling Forms with Redux Form

## Section 24 - REST-Based React Apps

## Section 25 - Using React Portals

## Section 26 - Implementing Streaming Video

## Section 27 - The Context System with React

## Section 28 - Replacing Redux with Context

# IMPORTANT NOTE: SECTIONS HEREAFTER CONCERN ONLY OLDER VERSIONS OF REACT

## Section 29 - Working with Older Versions of React

## Section 30 - Ajax Requests with React

## Section 31 - Modeling Application State

## Section 32 - Managing App State with Redux

## Section 33 - Intermediate Redux Middleware

## Section 34 - React Router + Redux Form v6

## Section 35 - Bonus Topics

## Section 36 - React Router + Redux Form v4

## Section 37 - Extras
