# Modern React (with Redux) Journey

My journey through Stephen Grider's course on Udemy! It will consist of my notes, code that I type along with the instructor, projects guided by the course, and my own additions to the projects

<img src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1604437767/eggo/React_Planet.png" alt="Astronaut With Dog" height="250" />

<details>

  <summary>My Personal Notes...</summary>

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

##### `Originally Started: 11/21/21`

### What is JSX?

- Looks like HTML -- but it isn't!
- Very similar in form and functions to HTML with a couple differences
- Babel also is responsible for for processing our "JSX" that we write
- Our browsers do not understand natively what JSX is. Babel converts it to normal looking JavaScript code
- We can visit babeljs.io to write code and see the ES5 equivalent
- Basically, a JSX render statement gets converted fromt and to the following:

```js
// JSX we write:
const App = () => {
  return <div>Hi!</div>;
};

// ES5 conversion:
const App = () => {
  return React.createElement('div', null, 'Hi!');
};
```

- Any time we see JSX, we are writing it for _simplicity_ sake. If we had complicated components, with nested divs, the JavaScript equivalent would be tremendously unreadable and code-heavy!
- We are not required to use JSX in React, but it is highly recommended.

### Converting HTML to JSX,

JSX vs HTML

- Adding custom styling to an element uses different syntax
- Adding a class to an element uses different syntax
- JSX can reference JS variables

### Inline Styling with JSX

HTML: `<div style="background-color: red;"></div>`
JSX: `<div style={{ backgroundColor: "red" }}></div>

- The outer curly-brace indicates we want to reference a JavaScript variable in our JSX. The inner curly-brace indicates a JavaScript object, where the keys are the properties we want to style and the values are the value we want for that style
- We remove the double quotes around the style (but they'll be necessary for the value we specify, typically)
- For style properties, we remove any dashes and capitalize the next letter over (camelCase).

### Converting Styling to JSX Format, Class vs ClassName

- It's a bit of a community convention to use double quotes when we want to indicate a string. Any non-JSX property, by convention in the JavaScript community we make use of single quotes. But it's completely up to you if you rather use all double quotes, or even all single quotes! Example:

```js
<input id="name" type="text" />
<button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
```

(Stephen also claims it is a JSX _requirement_ to use double quotes -- but this does not seem to be true now)

### Class vs ClassName

Another difference between JSX and HTML is the use of `className` in place of HTML's `class`:

```js
// In HTML
<label class="label">

// In JSX
<label class="label">
```

Why do we have to do this? Well, `class` is a JavaScript keyword! So we just want to avoid potential collisions with the `class` keyword. We don't want to confuse JavaScript into thinking we want to definie a JS class. Nowadays, though, this is not an issue: JS and the tools around it are intelligent enough to deciper when we want a `class` declaration and using the `class` attribute inside some JSX.

### Referencing JavaScript Variables in JSX

- Can easily reference JavaScript variables and function calls inside JSX: We just wrap them in curly-braces:

```js
const btnText = 'Cilck me!';

const App = () => {
  return <button>{btnText}</button>;
};

- Strings, numbers, arrays, booleans are all supported in JSX.

```

### Values JSX Can't Show

- In JSX, we are not allowed to take a JavaScript object and reference it inside of JSX -- specifically where it is expecting text. You can reference a specific object property, though -- like myObject.name -- just not myObject directly. Can use objects as attributes though (necessary for styles attribute!)

- Results in error message similar to: "Objects are not valid as a React child"

### Finding Forbidden Property Names

- For labels, the `for` attribute is invalid: Use `htmlFor` instead. This avoids browsers or tools interpreting it as a traditional JavaScript for-loop. Not really necessary in modern development, but good to follow.

- There are a couple other differences betwen JS and JSX, but many of them will not crash your application, so they will be harder to detect. You should reference your dev console frequently to be alerted to most of these

## Section 3 - Communicating with Props

### Three Tenets of Components

1. Component **Nesting**

- A component can be shown _inside_ of another

2. Component **Reusability**

- We want to make components that can be easily reused through our application

3. Component Configuration: We should be able to configure a component when it is created

### Application Overview

In this section, we will create an app that displays a list of comments, with a username, avatar, comment time, and the text itself.

### Getting Some Free Styling

As the course is not teaching CSS, we try to spend less time on it by using the **Semantic UI** CSS framework. This library is simply a CSS file that will give us access to some styling. We can reference it here: `https://semantic-ui.com/`

Easiest way to install:

- Visit cdnjs.com and search semantic-ui
- Find latest link tag: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
- Add this link tag into the head tag of public/index.html file
- Can tell it was installed correctly if the font of the page changes, or going to browser's dev tools -> Network -> CSS, refresh page, and see that semantic.min.css was loaded up properly

### Specifying Images in JSX

**Very useful websites**: `https://github.com/marak/Faker.js/`

- Open source library that can help us generate a lot of different types of fake data very quickly
- Install with: `npm install --save faker` and import with `import faker from 'faker';`
- Fairly large, so probably don't want to keep it inside an actual production project
- Example usage:

```js
<img src={faker.image.avatar()} />
```

This will create an image that is random each time.

### Extracting JSX to New Components

Steps for creating a reusable, configurable component:

1. Identify the JSX that appears to be duplicated.
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does.
3. Create a new file to house this new component -- it should have the same name as the Component.
4. Create a new Component in the new file, paste the JSX into it.
5. Make the new component configurable by using React's "props" system.

### Component Nesting

Simple steps for using a Component within another:

1. Export the component in the file you declare it in, so it can be available to other files:

```js
const CommentDetail = () => {
  // return JSX, etc
};

export default CommentDetail;
```

2. In the file we wish to render that component, make sure to import it, using its relative path: `import CommentDetail from "./CommentDetail";`

- Note we don't need to put the JS/JSX extention.

3. Render the component:

```js
<App>
  <CommentDetail />
</App>
```

- Note we do not use curly-braces, even though we are referring to JavaScript variables inside of JSX. Components are the one exception to that rule: We treat the component like it is a JSX tag itself.

### React's Props System

In a typical _component hierarchy_, we have the App component up top. It will have **children** components that it renders, making it their **parent**. Those children can then have their own children, and we get a tree-like hierarchy of child/parent component relationships. To handle the communication of data between components, we use React's **prop system**

Props

- System for passing data from a _parent_ component to a _child_ component
- Goal is to customize or configure a child component (how the component looks or how the user interacts with it)

In our "comments" project, we could have the App component pass props that allow each CommentDetail component to have a different username, for example.

### Passing and Receiving Props

- A child cannot directly pass props up to a parent

Example of passing a prop:

```js
// Giving CommentDetails an "author" prop
<CommentDetail author='Matthew' />
```

- Value of prop isn't just limited to a hard-coded value, or string.
- That value of the prop is only provided to _that_ instance of CommentDetail -- not all others

Back in the CommentDetail component itself, we need to get access to this prop somehow. This is done as follows:

```js
const CommentDetail = (props) => {};
```

- By convention we name the argument of the component function "props"
- We can now access the "author" prop we gave the component:

```js
<div>{props.author}</div>
```

### Passing Multiple Props

We can pass as many properties as we'd like (although we should limit it within reason, for good component design)

```js
// In App
<CommentDetail author="Matthew" date="Today at 4:45PM" />

// In CommentDetail
<div>Author: {props.author} - Date: {props.date}</div>
```

### Showing Custom Children

Wrap content into another Component by using the `props.children` property inside the component you want another component rendered into. This renders whatever is between that custom component's tags. There are two steps required:

1. Put the component (to be the child) between the opening and closing tag of the parent component
2. In the parent component, access the child with the automatic prop React provides us with, `props.children`

```js
// In App.js
<ApprovalCard>
  <CommentDetail author='Matthew' />
</ApprovalCard>;

// In ApprovalCard
const ApprovalCard = (props) => {
  return (
    <div>
      <p>Do you approve this comment?</p>
      {props.children}
    </div>
  );
};
```

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

</details>
