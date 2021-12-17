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

##### `Originally Started: 11/22/21`

### Class-Based Components

The other type of Component is a **class-based** component. It is helpful to understand React's history, for the origin's of class and functioanal components.

How React _Used_ to Be

- _Functional_ Components:
  - Can produce JSX to show content to the user
- _Class_ Components:
  - Can produce JSX to show content to the user
  - Can use the Lifecycle Method system to run code at specific points in time
  - Can use the "state" system to update content on the screen

How React Is _Now_

- **Functional** Components:
  - Can produce JSX to show content to the user
  - Can use **Hooks** to run code at specific points in time
  - Can use **Hooks** to access state system and update content on the screen
- Class Components remain the same

In modern React, functional components are more or less the same as Class-based components with this **Hooks** system. So why should we bother learning both?

- Companies with _established projects_ are using Class-based components
- Companies with _newer projects_ may be using Class-based _or_ Function-based components
- Personally, I will be writing nearly all my compnents as functional ones, with the occasional class component to help me remember its syntax

As far as this course is concerned, it will also be easier to learn Class-based components, then Hooks, then Redux than it will be to simply learn Hooks then Redux. So we learn Class-based components first

### Application Overview

In this section, we will build a rather pointless, simple app. It will take the user's geolocation and current season and display a corresponding message and image. For example, in summer it will show a sun icon and render something like "Hit the beach!" and in winter it will render a snowflake and say "Burr, it's chilly!"

App Challenges

- Need to get the user's physical location
- Need to determine the current month
- Need to chagne text and styling based on location and month

### Scaffolding the App

How can we build this app? At _first_ glance we _might_ get away with just two components:

1. App: Has to determine location and month. Passes some props down to its child...
2. SeasonDisplay: Shows different text/icon based on props

### Getting a Users Physical Location

We can get a user's location with functions that are built into most modern browsers! We use the Gelocation API:

```js
window.navigator.gelocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
```

This is an async function, which takes time to process. So we need to use callbacks -- the first being a _success_ callback and the second being a _failure_. It returns a "Position" object, which then has a "coords" object with "latitude" and "logitude" (among others) as properties.

If we get an error message and our location cannot be found, we can force our location to a preset location in the dev tools. In the console menu, we go to "Sensors", and "Geolocation" and then select a preset location.

### Resetting Gelocation Preferences

- What if the user declines our app from knowing the user's location? We need to develop our app in a way where it works when the user denies (or the API simply fails).
- We also need to be able to reset the browser to ask us for our location again, since it never asks again once you accept / decline the first time.
  - To do so, we click the "i" by the URL in our browser (in Chrome), and then change Location from "Allow" to "Ask"

### Handling Async Operatiosn with Functional Components

Timeline of our app:

- JS file loaded by browser -> App component gets created -> Call to gelocation service -> App returns JSX, gets rendered to page as HTML -> ... -> We get result of gelocation

Since the gelocation call takes several seconds to return a result, but we want to render something that depends on that result, we "need" to use a Class-based component. (Note, in modern React we also just use Hooks in a functional component.) We need a way to wait for the geolocation to return a result, so we will need a Class-based component in conjunction with React's state system. In old React, with a functional component we have no way of telling the component to re-render itself after it gets the data we need from the gelocation API call. So we will be stuck rendering its initial state, which is no data in our gelocation object.

### Refactoring from Functional to Class Components

Rules of **Class** Components:

1. Must be a Javascript Class (introduced in ES2015).
2. This class must extend (subclass) React.Component.
3. Must define a "render" method that returns some amount of JSX.

```class App extends React.Component {
  render() {
    return <div>Latitude: </div>
  }
}
```

We "borrow" a lot of built-in functionlity and methods when we extend React.Component, including this render method.

Turning our functional component into a class-based one is not enough on its own to solve our gelocation issue. We also need to take advantage of the React state system.

## Section 5 - State in React Components

##### `Originally Started: 11/22/21`

### The Rules of State

Rules of State:

1. Only usable with class components (Technically can be used with Functional components using **Hooks** -- but that's more challenging!)
2. You will confuse props with state :(
3. "State" is a JS object that contains data strictly relevant to a component.
4. Updating "state" on a component causes the component (and children) to (almost) instantly re-render. **Important** to realize that an instance variable of a component that changes will not automatically cause the component to re-render, even if that variable is used in the render method.
5. State must be initialized when a component is 1st created.
6. State can **only** be updated using the function "setState" -- never directly!

### Initializing State Through Constructors

- It is a React requirement that we define **render()** in our Class components, which returns JSX
- We can also define the special **constructor()** function (not required by React, by belongs to JS itself)
  - Very first function to be called when an instance of a class is created
  - Good location to initialize our **state**. (Not the only way, but recommended)
  - Accepts a **props** argument.
  - Must call `super(props)` which calls the parent's class constructor (from React.Component)
- The reason we call the constructor function (and therefor the required super()) is so we can initialize our state object

```js
// In a component definition
constructor(props) {
  super(props);
  this.state = { latitude: null };
}
```

It's a good idea to default our state to appropriate values. In our case we expect a number for latitude, so we default it to null.

### Updating State Properties

We can freely reference the state object and the properties inside of it from any function inside of our component.

Since the **render()** method is called fairly frequently, we never want to put requests to APIs in it, or anything computationally-heavy. So we should (for now) put our gelocation API call inside our constructor.

```js
window.navigator.geolocation.getCurrentPosition(
  // NEVER do this.state.latitude = value;
  position => this.setState({ latitude: position.coords.latitude });
  err => console.log(err);
);
```

The **ONLY** time we do direct assignment to `this.state` is in the constructor when first initializing it!

### App Lifecycle Walkthrough

Our new app timeline:
Instance of App component is created - > App component's constructor functon gets called -> State object is created and assigned to the this.state property
-> We call gelocation service -> React calls component's render method -> App returns JSX, gets rendered to page as HTML -> ... -> We get result of gelocation!
-> We update our state objet with a call to this.setState -> React calls our render method a second time -> Render method returns some (updated) JSX
-> React takes that JSX and updates content on the screen

For a brief moment, we render our app without "Latitude" having a value. This makes for an awkward user experience.

### Handling Errors Gracefully

Any time we want to update our component, we are going to update our state. So if we get an error in our gelocation API call, we want to set some state to force a re-render with an error message to the user. So we should add an error state!

```js
// In error message callback of geolocation.getCurrentPosition
(err) => {
  this.setState({ errorMessage: err.message });
};
```

**Important** to note how we are not required to update every property inside our state object at once. We can just update the properties we need. We also never add or remove properties.

We now have the ability to render our errorMessage to the screen. But we don't want to render that message when there's not even an error! So how can we only sometimes show this message? Next section covers that!

### Conditionally Rendering Content

We have 3 scenarios for what we might need to render to the screen:

1. Have latitude, no error message -> Show latitude
2. No latitude, have error message -> Show error
3. No latitude, no error message -> Show "loading"

You CAN use if statements in a class-based Component's render function: Do a series of if-statements where each one will "return" the appropriate content. Perhaps other instructors simply meant you can't do if-statements INSIDE the return statements? Or maybe not in Functional Components? **TO-DO: Research that!**

We use conditional rendering to handle this:

```js
render() {
  if (this.state.errorMessage && !this.state.latitude) return <div>Error: {this.state.errorMessage}</div>;
  if (!this.state.errorMessage && this.state.latitude) return <div>Latitude: {this.state.latitude}</div>;
  return <div>Loading</div>;
}
```

## Section 6 - Understanding Lifecycle Methods

##### `Originally Started: 11/22/21`

### Introducing Lifecycle Methods

The second way to initialize state relies on a concept known as _lifecycle methods_

Component Lifecycle (Over Time)

- **constructor**
- **render** -> At this point c ontent is visible on screen
- **componentDidMount** -> Sit and wait for updates...
- **componentDidUpdate** -> Sit and wait until this component is no longer shown...
- **componentWillUnmount**

If we define these lifecycle methods, we can put our own code inside them to handle logic depending on the lifecycle of our component.

- We use _componentDidMount_ to handle logic that we want to occur only once, when the component first initializes
- We use _componentDidUpdate_ to handle logic that will repeat any time the component updates (renders)
- We use _componentWIllUnmount_ to perform any cleanup we wish to happen after we wish to no longer show the component

```js
// Will only be logged once
componentDidMount() {
  console.log("My component was rendered to the screen.");
}

// Logged any time state changes
componentDidUpdate() {
  console.log("My component was just updated - it re-rendered!");
}
```

### Why Lifecycle Methods

Why would we even use these different lifecycle methods?

- **constructor**
  - Good place to do one-time setup
- **render**
  - Avoid doing anything besides returning JSX
- **componentDidMount**
  - Good place to do data-loading
- **componentDidUpdate**
  - Good place to do more data-loading when state/props change
- **componentWillUnmount**
  - Good place to do cleanup (especially for non-React stuff)

Sounds like constructor and componentDidMount do the same thing...

- Although we _could_ do data-loading in the constructor (or an API request) we should do it in componentDidMount.
- Good to centralize data-loading in componentDidMount since it leads to more clear, organized code

3 other lifecycle methods (almost never used):

1. **shouldComponentUpdate**
2. **getDrivedStateFromProps**
3. **getSnapshotBeforeUpdate**

### Refactoring Data Loading to Lifecycle Methods

In this lesson we just refactored the async geolocation call from the constructor into the componentDidMount method.

### Alternate State Initialization

Now we can come back and address the second way you can / might see state initialized:

```js
state = { latitude: null, errorMessage: '' };
```

No need for the `this` keyword. We can also drop the constructor, if all we were doing in it is initializing state. Babel converts this to JS code that uses the constructor and calls super behind-the-scenes.

### Passing States as Props

We can pass our App's _latitude_ state and pass it as a prop to our _SeasonDisplay_ component:

```js
// In App's render()
<SeasonDisplay latitude={this.state.latitude}>
```

- This is an extremely common React pattern to use, and forms the basis of React's state/prop system.
- When latitude is updated in App, it re-renders itself. This also causes the SeasonDisplay (child) component to be re-rendered as well, since its prop is changing.

### Determining Season

We need a way to retrieve what season it is. We can create a helper function to do this, placing it outside the SeasonDisplay component since it is best to extract as much logic out of functional components as possible.

```js
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? 'summer' : 'winter';
  return lat > 0 ? 'winter' : 'summer';
};

// In SeasonDisplay's functional component
const season = getSeason(props.latitutde, new Date().getMonth());
return <div>The season is: {season}</div>;
```

### Ternary Expressions in JSX

Instead of using a series of if-else statements in our SeasonDisplay component (but _outside_ the return statement for the JSX being rendered), we can make use of ternary operators:

```js
return (
  <div>
    {season === 'winter' ? "Burr, it's chilly!" : "Let's hit the beach!"}
  </div>
);
```

This way to do conditional rendering is a bit divisive in the React community. Some say it is best to not put that much logic directly into the JSX, and instead extract it out to a helper variable. But it's purely a matter of personal preference.

### Showing Icons (with Material UI)

To show an icon with Material UI (for our snowflake or sun) we can do:

```js
const icon = season === "winter" ? "snowflake" : "sun";
<i className={`icon ${icon}} />
```

### Extracting Options to Config Objects

To reduce the use of our rather identical two ternary operators (for determining the text and icon to use), we can utilize a useful pattern that we should make part of our routine. We will create a configuration object, placing it outside the component itself.

```js
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake',
  },
};

const season = getSeason(props.latitude, new Date().getMonth());
// Can replace our two ternary operators with:
const { text, iconName } = seasonConfig[season];
```

### Adding Some Styling

Nothing important: This isn't a CSS course!

### Showing a Loading Spinner

As we refresh the page, there's nothing really going on while we wait for our location to be detected for the first time. We are just greeted with a plain white page with a small, st atic "Loading" text until we pick "Allow Location".

Using the Material UI library, we make use of a "Spinner" to render in our conditional SeasonDisplay render method. We replace our simple "Loading" text with this Spinner. The logic of the spinner is exlusive to Material UI, so I won't bother noting it. The point is the use of conditional rendering to determine when the spinner should be rendering, and then render it.

But our spinner's text it just "Loading...". What if we want it different, depending on our use-case?

### Specifying Default Props

...Well, we can pass a prop to the spinner!

```js
return <Spinner message='Please accept location request' />;
```

But what if we forgot to put the message prop in? We won't get any message rendering at all! We should have _some_ default text to fall-back to. We can do this with **default props**:

```js
const Spinner = (props) => {
  return someJSX;
};

Spinner.defaultProps = {
  message: 'Loading...',
};
```

**TODO: Check if you can do the following, but I think you can**:

```js
const Spinner = (props) => {
  this.defaultProps = { message: 'Loading' };
};
```

### Avoiding Conditionals in Render

Our render method uses a series of if-statements to determine what to render. But this could be problematic in some scenarios. What if we wanted to surround the rendered output - regardless of which one it is - in a div with some special styling (like a red border). We'd have to write this logic once for each return statement. It may be better to create helper render functions, to keep our render's return statement clean:

```js
renderContent() {
  if (...) return someJSX;
  if (...) return someOtherJSX;
  return <Spinner message="Please accept location request" />;
}

render() {
  return (
    <div className="border red">
      {renderContent()}
    </div>
  )
}
```

So we try to avoid having multiple return statements inside a render method. Conditionally logic should, therefor, be put in a helper method.

### Breather and Review

Benefits of **Class** Components...

- Easier code organization
- Can use state (another React system) - Easier to handle user input
- Understands lifecycle events -> Easier to do things when the app first starts

It's harder to understand our functional component than it is our class component. We have all these helper functions up top (some which may be mistaken as our React component). We _could_ put the functional component at the top of the file, _but_ convention is to have the configs / helpers up top and the functional component at the bottom.

## Section 7 - Handling User Input with Forms and Events

##### `Originally Started: 11/22/21`

### App Overview

Stuff to Still Figure Out

- How do we get feedback from the user?
- How do we fetch data from some outside API or server?
- How do we show lists of records?

While figuring this stuff out, we will be building another app in the next two sections. It will feature the ability to search for a term, use an API request to retrieve images that match that term, and then render that list of results as a simple column of images. In the next iteration of the app, we will tile the images across the screen, rather than just a vertical list with one image per row. The second iteration will be CSS-heavy, but also cover React-specific topics.

### Component Design

App Challenges

- Need to get a serach term from the user
- Need to use that search term to make a request to an outside API and fetch data
- Need to take the fetched images and show them on the screen in a list

Components We'll Use (to Start)

App

- Has instance of SearBar and ImageList

SearchBar

- Shows a text input
- Handles typing event

ImageList

- Take a list of images and render them

### Adding Some Project Structure

We'll create a _components_ folder, where we store all our component files. We we all put App into its own file and put that in the folder too. It is common convetion to have App as its own file, rather than combining it with index.js like we have been.

### Showing Forms to the User

We need state to handle user input, so we will make _SearchBar_ a Class-based component. It will return a form with a text input. We then style it with Semantic UI.

### Creating Event Handlers

```js
onInputChange(event) {
  console.log(event.target.value);
}

render() {
  return (
    <input type="text" onChange={this.onInputChange}>
  )
}
```

- Built in prop names for event handlers: "onClick" = User clicks on something. "onChange" = user changes text in an input. "onSubmit" = user submits a form.
  - We use these names as prop names. Some types of HTML elements do not support certain handlers (a div cannot be submitted or changed, for instance)
- When passing a callback to an event handler, **do not** put the parentheses! This is a pointer to a function (which will be called on its own when appropriate). Including the parentheses would call the function immediately.
- Our onInputChange is called with one argument being passed to it automatically, which we call the **event object**
  - It is a normal JS object which contains a bunch of information about the event that occured
  - We care mostly for the `event.target.value` property, when dealing with inputs
- Convention for event handlers is to name them starting with "on", followed by the element we are assigning this callback to, and the event we are watching for. Example: `onInputChange`, `onButtonClick`
  - Another convention is to use `handle` instead of `on`, i.e `handleInputChange`. As in this function is reponsible for _handling_ such an event. (I think I prefer this!)

### Alternate Event Handler Syntax

An alternate syntax is frequently used in documentations and other projects, so it's important to know.

```js
<input type="text" onChange={event => console.log(event.target.value)}>
```

This way we avoid defining a seperate method on the class. This arrow function way of working with event handlers is especially concise if our logic only contains one line of code.

### Uncontrolled vs Controlled Elements

We prefer to create **Controlled** elements over **Uncontrolled**. When handling inputs in an Uncontrolled manner, React only has an idea of an input's value for a brief moment (it is the HTML DOM that's keeping track of it, rather than React).

_Uncontrolled_ way to do events: `<input onChange={<methodWeDefine>}>`.
The _Controlled_ way: `<input value={this.state.someProp} onChange={(event) => this.setState({ someProp: event.target.value })}`

In our project, the flow when using a _Controlled_ input is:

- User types in input -> Callback gets invoked (onChange) -> We call setState with the new value -> Component rerenders -> **Input is told what its value is (coming from state)**

Using an _Uncontrolled_ input, if we asked the question "What is the value of the input _right_ now?", the only way to answer that would be to reach into the DOM and pull out that value. The only time our React code knew what that value was is when the callback method was running, and we accessed `event.target.value`. At any other time, the 'source of truth' was found only inside our HTML document, and not React. With React, we do _not_ want to store information inside our HTML elements. We want to centralize all our information in our React component. So even though our input knows its value already, we tell React to set the value prop in order to ensure things are controlled.

### Handling Form Submittal

The default behavior when submitting a form is to send the form data to some backend server. But here, we do not want that to happen. So we make sure to call event.preventDefault when handling onSubmit events on Forms. We use React's built-in `onSubmit` prop to link it to an event handler:

```js
handleFormSubmit(event) {
  event.preventDefault();

  console.log(this.state.term); // This will throw an error -- we find out why next lecture
}

<form onSubmit={handleFormSubmit}>
  <input />
</form>
```

### Understanding `this` in JavaScript

Why were we getting an error when calling `this.state.term` in our event handling function?

- The error: "Cannot read property "state" of undefined.
- It is the most common React error message!
- To understand the error, we have to understand the `this` keyword in JavaScript

What is `this` used for in a class?

- Inside of any code in our class, we can reference keyword `this`. It is a reference back to the class itself. So then we can get direct access to our properties (state, render, handleFormSubmit, etc).

How is the value of `this` determined in a function?

- **IMPORTANT**: Whenever we want to figure out what the value of `this` is inside a method on a class, we do not look at the method itself, but rather on where we call the method.
- We find the function name, look to the left (at the ".") and then the variable on the left-hand side. _That_ is what `this` is equal to.
- Basically what is happening is when our event callback gets invoked, there is no object it is being called on. It is not being called as `myComponent.handleFormSubmit()` for instance, but rather just `handleFormSubmit`. So there is no `this`!
- It's like it's being set up as follows:

```js
const onSubmit = handleFormSubmit;
onSubmit(); // There is nothing it's being called from - no <variableName>.onSubmit()
```

### Solving Context Issues

There are _many_ different ways to solve the `this` issue.

1. **Binding** the function, in the constructor:

```js
constructor() {
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}
```

Calling `.bind` produces a new version of that function. This new function is "fixed" with the correct value for `this`. We then overwrite the "broken" function with that version. This is a rather legacy solution, but still fairly common.

2. Turn the function definition into an ES2015 **arrow function**!

```js
const handleFormSubmit = (event) => {};
```

- Arrow functions automatically bind the value of `this`

3. Arrow function _directly_ into the prop that is making a callback to that function:

```js
handleFormSubmit(event) {
  console.log(event.target.value);
}
<form onSubmit={(event) => this.handleFormSubmit(event)}>
```

### Communicating Child to Parent

We want our SearchBar to do only a specific task. Does it need to be handling the API request? We should make that the job of the parent, App. But how do we get the search term from our child, SearchBar, to our parent? Props can only go _down_ the hierarchy. But the App is _up_.

The solution is to pass a prop down from the App to the SearchBar. This prop will be a callback method (onSearchSubmit). The app will pass this as a callback method to the SearchBar, and the SearchBar will hold onto it and call upon it (with the search term) when the form is submitted.

This is basically what is happening with the built-in `onChange`, `onSubmit` etc event handlers. But now we need to do the full process ourselves.

### Invoking Callbacks in Children

```js
// App.js
handleleOnSubmit(term) { console.log(term) }

render() {
  return (
    // This prop can be called ANYTHING we want!
    <SearchBar onSearchSubmit={handleOnSubmit}/>
  )
}

// SearchBar.js
const handleOnSubmit(event) => {
  this.props.onSearchSubmit(this.state.term);
}

render() {
  return <form onSubmit={this.handleOnSubmit}>
  // etc
}
```

## Section 8 - Making API Requests with React

##### `Originally Started: 11/22/21`

In this section, we are still working on the app from the previous section.

### Fetching Data

We will make use of the Unsplash API.

### Axios vs Fetch

How are we going to make a request from inside our React app?

- It is not React's job itself to make a request to our Unsplash API library. React is only about showing content to the user and handling user interaction
- To make network / AJAX request, it is the AJAX client's responsibility
  - It makes a request like "Send me data about pictures for 'cars'" to the Unsplash API, which then returns a result such as "Here are some car pictures!"

Two of the most commonly used options for making AJAX requests

- **axios**: Stand-alone 3rd party library, easily installed using npm
- **fetch**: Singular function built into modern browsers. No installation required.

Since axios handles requests in a simpler, more predictable fashion, we will prefer it. We install with `npm install --save axios`

**Convention:** Put third-party import statements above those of our own files.

### Viewing Request Results

This section covers how to work with the Unsplash API and axios.

```js
onSearchSubmit(term) {
  // Async request
  axios.get('https://api.unsplash/com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 'Client-ID <OurAPIAccessKey>',
    },
  });
}
```

The result is some JSON that contains the result of our request for the search term.

### Handling Requests with Async Await

Timeline for Picture Search App

Component renders itself one time with no list of images -> onSearchSubmit method called -> Request made to Unsplash -> ...wait... -> Request complete
-> Set image data on state of App component -> App component rerenders and shows images

We will have an ImageList component render the images, rather than giving App the responsibility of that.

To make our AJAX call, we have two methods when working with axios.get, which returns a Promise.

1. Promise-Based (Chaining "then" Solution)

```js
axios
  .get('https://api.unsplash/com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 'Client-ID <OurAPIAccessKey>',
    },
  })
  .then((reponse) => console.log(reponse.data.results));
```

2. Async Await Solution

```js
async handleSearchSubmit(term) {
  const reponse = await axios.get(...etc...);
  console.log(response.data.results);
}
```

### Setting State After Async Requests

- When having an object or array as a piece of state, it's best to initialize the state to an empty object or empty array. This avoids potential errors, where we are trying to call properties on an object or methods on an array (like array.map).

After our AJAX call returns a response, we want to set state that updates an array of images.

```js
// In handleSearchSubmit, after call to axios.get
this.setState({ images: response.data.results });
```

But this gives an error due to `this`! We need to bind things properly...

### Binding Callbacks

To fix this, we use an arrow function, like before:

```js
handleSearchSubmit = async (term) => {};
```

### Creating Custom Clients

This section is mostly code clean-up. We create a new folder called "api", along with an "unsplash.js" file. We put our code related to making our Unsplash AJAX call here.
We can use the fact that axios lets us to set up a pre-configured instance that has default properties for headers / params / where it's making a request to.

```js
// In api/axios.js
// Creates instance of a customized axios client
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID <OurUnsplashID>
  }
});

// In App.js
import unsplash from "../api/unsplash";

handleFormSubmit = async term => {
  conse response = await unsplash.get("/search/photos", { params: { query: term }});
  this.setState({images: response.data.results});
}
```

## Section 9 - Building Lists of Records

##### `Originally Started: 11/22/21`

### Rendering Lists

For the app, we create an ImageList component that will be tasked with rendering a list of images passed to it. We define an _images_ prop on the ImageList and pass the _images_ state in our App's state object to it.

### Review of Map Statements

Understanding the `map` array method is key to building lists of components with React.

```js
const numbers = [2, 4, 6, 8];
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  newNumbers.push(numbers[i] * 10);
}

// Same thing, with a map statement
const newNumbers = numbers.map((number) => {
  return number * 10;
});
```

- Creates a _new_ array.
- Iterates over each element in the array (received as an argument - good convention to name it the singular form of what we are iterating over)
- Returns a new value for that element based on some calculation (in our case multiplying the original value by 10).
- Can remove the "return" keyword if it is a single line, as well as curly-braces and semi-colon, and the parentheses around the argument!
- Does not mutate the array map is being called on

### Rendering Lists of Components

We can render each element in our _images_ prop in ImageList (a state passed down from App) as follows:

```js
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} />;
  });

  return <div>{images}</div>;
};
```

But we get a Warning about each child in an array or iterator not having a unique "key" prop...

### The Purpose of Keys in Lists

...We need to ensure each item in a rendered list gets a special "key" property.

- React wants to be efficient, so when it sees a list it will go through each item and think...
  - "Oh that element is already in the DOM; I don't need to render that again."
  - "Oh, this item is new; I'll have to update and render it.
- A **key** prop helps this process!

  - "Oh, the element with this key is right here, and its contents remain unchanged. I won't update it!"
  - "Hey, I see no element with this key; I guess I'll put it into the DOM now."
  - A key is purely for performance consideration
  - Should be unique

  ### Implementing Keys in Lists

  We give a key to the _root_ element in our list that's being returned from our map statement.

  ```js
  return <img key={image.id} src={image.urls.regular} />;
  ```

  If we had an outer dive, we'd put the key there:

  ```js
  return (
    <div key={image.id}>
      <img src={image.urls.regular} />
    </div>
  );
  ```

## Section 10 - Using Ref's for DOM Access

##### `Originally Started: 11/22/21`

### Grid CSS

We now focus on styling the app, to create "Version 2" of it! Styling in React can be done by creating a CSS file and importing it into the component we wish to utilize it (although technically the CSS file's classes become accessible for all components).

```js
// ImageList.css
.image-list {
  display: grid;
}

// ImageList.js component
import "./ImageList.css"

// In render return:
<div className="image-list"></div>
```

A lot of this section is rather CSS-heavy, focusing on the Grid system. I won't be taking many notes on this stuff.

### Creating an ImageCard Component

```js
// Create ImageCard. Self-explanatory so won't put code here

// Rather than return an img in ImageList, we now return our Component:
return <ImageCard key={image.id} image={image} />;
```

**IMPORTANT ASIDE**: Seems we don't need to define a constructor to get access to the props object. Was this mention earlier? Seems we only define a constructor if we want to initialize state.

### Accessing the DOMN with Refs

For Version 2 of our app, we want _dynamically_ give it enough space (margin) to be rendered nicely.

- Let the ImageCard render itself and its image
- Reach into the DOM and figure out the height of the image
- Set the image height on state to get the component to re-render
- When re-rendering, assign a `grid-row-end` to make sure the image takes up the appropriate space

With traditional JavaScript, we'd simply do a `document.querySelector("img").clientHeight` to figure out the image height. But how do we access DOM elements directly using React? We use **Refs**

React Ref System

- Gives access to a single DOM element
- We create **refs** in the constructor, assign them to instance variables, then pass to a particular JSX element as props

### Accessing Image Height

1. Create an instance variable that's equal to `React.createRef()`
2. In the JSX element we want to have a reference to, we set its `ref` prop to this instance variable.

```js
constructor(props) {
  super(props);

this.imageRef = React.createRef();
}

// In render()
return (
  <img ref={this.imageRef} src={urls.regular} />
)
```

Now any place inside this component we can reference _this.imageRef_ and get access to the DOM node.
**Remember** the _img_ tag above is NOT a DOM element (it eventually will be turned into one). It is a JSX element. So we need this ref.

The ref itself is a JavaScript object that has a `current` property. This property references a DOM node.

Going back to our image height in vanilla JavaScript example, we could now do: `this.imageRef.current.clientHeight`
We do this, but when we console.log the value in componentDidMount, we get 0??? Why is this happening?

- In our browser, our dev console is extremely fancy. The console does not yet know what data is inside our image. The console only knows what the height is once we expect that object and expand its properties. At that moment, Chrome looks at that DOM node, pulls its info out, and prints it to the console. So when we expand to see certain properties, we are seeing that information generated at that _moment_.
- When our component first renders, we print out the height of the image. But at this point, the image has not actually loaded yet. It has not finished downloading its image. So the img tag has a height of 0 pixels.

### Callbacks on Image Load

To fix the above problem, we need to access our ref and add an event listener to it.

```js
componentDidMount() {
  this.imageRef.current.addEventListener("load", () => this.setSpans);
}

setSpans = () => {
  console.log(this.imageRef.current.clientHeight);
}
```

- This is a basic, plain HTML / JS event listener. Not React.

### Dynamic Spans

```js
setSpans = () => {
  const height = this.imgeRef.current.clientHeight;
  const spans = Math.ceil(height / 10);
  this.setState({ spans });
};

// In render()
<div style={{ gridRowEnd: `span ${this.state.spans}` }}> </div>;
```

A lot of the work throughout the past few lectures were just so we can create dynamic values for each item's `grid-row-end` property. This allows very nice, tight tiling of images of different sizes in our ImageList. It's a nice effect to learn, so worth investigating and incorporating in future projects. But I did not take too many notes on the Grid / CSS-specific dealings.

### App Review

Nothing new to note, but this is a very good video lecture to refer back to for a quick refresher on the prior 3 sections!

## Section 11 - Let's Test Your React Mastery!

##### `Originally Started: 11/22/21`

**TODO** Come back later and take detailed notes.

This is an optional section, as we are going to build an app that isn't too different from the last one. We will be building an app where we can search for videos, which will then be retrieved from the YouTube API and rendered onto the screen. There are some additions here and there, but it's mostly a project to help solidify the basics learned thus far.

I will be skipping taking notes on it (for now), but may come back to do so in the future. I have already completed the project taught during this section.

## Section 12 - Udnerstanding Hooks in React

##### `Originally Started: 11/22/21`

### React Hooks

We have learned a lot about Class-based components. In this section we will now dive deeper into Functional components and make use of their Hooks.

Hooks System

Hooks are a way to write reusable code, instead of more classic techniques like inheritance.

- **useState**: Function that lets you use **state** in a functional component
- **useEffect**: Function that lets you use _something like_ **lifecycle methods** in a functional component
- **useRef**: Function that lets you create a _ref_ in a function component

Primitive Hooks (10 functions included with React)

- useState, useEffect, useContext
- useReducer, useCallback, useMemo,
- useRef, useImperativeHandle, useLayoutEffect,
- useDebugValue

We will learn a lot of these Hooks over time, and eventually make use of them to write our own _custom_ hooks!

### App Overview

As we learn about React Hooks, we will be building a project along the way. It is a Widget application that will include multiple components:

- An Accordion component
- A Wikipedia API search component
- A Dropdown item selection component
- A Google Translate API component

We will then wrap the application up by building our own navigation using JavaScript and React - without a third-party library like React Router. This will be used to navigate between the different widget components that were built.

### App Architecture

How are we going to architect our Widgets project?

1. App component: Governs and coordinates information across the entire application

- This will pass an **items** state down as a prop to an Accordion component

2. Accordion: In charge of showing an accordion (questions and answers that can be collapsed)

- Uses the items prop to decide which set of questions and answers to display

- Items prop: Array of objects

  - Object has a title and content property.

- The only state we need to keep track of is which question is currently expanded.
  - We should keep this state in the Accordion component, as no other part of our App component cares about this information

### Communicating the Items Props

```js
// App.js
const items = [ { title: , content: }, { title: , content: }, { title: , content: } ]

// Pass down as props
<Accordion items={items} />
```

### Building and Styling the Accordion

In this lecture we just map over the items and render them in a list. Nothing new! We also hook up the Semantic UI library so we can style the app along the way.

We come across an interesting issue where some styling is messed up, because Semantic UI is not expecting us to wrap everything in an outer div -- but React requires us to do so when returning JSX. To fix this, we can convert the div to a **React.Fragment**:

```js
return <React.Fragment key={item.title}>// Etc...</React.Fragment>;
```

Now it is rendered without an extra element.

### Helper Functions in Function Components

Stephen makes a big deal about the less-organized, messier code caused by using Functional components. But the code for using a helper function here is exactly the same as in a Class-based component, so I'm confused. We simply define our function inside the Component, _exactly_ like we did in a Class-based component. If we are using the arrow syntax way, it is literally exactly the same -- just no need for the `this` keyword (though this was dropped for Class-based ones in later JavaScript).

### Introducing useState

Let's take a look at the steps to use the **useState** hook -- which is a Functional-component's replacement for the state object.

- We import `{ useState } from "react";`
- We initialize the state: `const [activeIndex, setActiveIndex] = useState(null);`
- We update the value of our piece of state: `setActiveIndex(index);`
- We reference our value: `<h1>{activeIndex}</h1>

### Understanding useState

- We use **array destructuring** when initializing our state.
  - It's a quick way to let us set up an array while simultaneously letting us set a variable that points to the 1st and 2nd element of the array, respectively. When we call _useState_ we get back an array with two elements. The first element is the piece of state we are keeping track of. The second element is a function that we call to update that piece of state. This function is commonly referred to as the state's **setter** method.
- In the _useState_ call, the argument we pass is the initial value for the piece of state we are creating.
- It is convention to prefix the function to change the piece of state with "set"

Perhaps the most confusing thing with a Function component is the inability to change multiple pieces of state at once. With a Class, we simply called setState with multiple object properties and their updated values. For Function components, we have to call useState for each piece of state, and then call all their respective set methods one at a time.

### Setter Functions

When we call a setter function, the component will re-render. At this point, the default value we initialized our state with will no longer be used; it will be updated to the value we passed to the setter.

### Expanding the Accordion

In this lecture, we simply use conditional checks to see which accordion item is the currently selected one and give it a Semantic UI classname that allows it to be exanded / collapsed.

### Creating Additional Widgets

With the Accordion done, we can focus on other random widgets for our Widget app that will help us learn various Hooks.

- A search widget - useState and useEffect
- A dropdown widget - useState, useEffect, useRef
- Language translater widget - useState, useEffect, useRef

We will then eventually wire them together using some simple navigation.

### The Search Widget Architecture

We will use the Wikipedia API for our searches. We make a simple _get_ request to some endpoint -- no auth or access keys needed!
We will build a single Search component, rather than breaking it into smaller parts. It will have _term_ and _results_ as state.

### Scaffolding the Search Widget

More basic stuff. We create the skeleton of a Search component, export / import it, and render the Search element in our App's render method.

### Text Inputs with Hooks

Nothing new, we create a controlled input for our search:

```js
// In Search.js
const [term, setTerm] = useState("");

// In render
<input value={term} onChange={event => setTerm(event.target.value)}>
```

### When do We Search?

Where are we going to write the code to make a request to the Wikipedia API? Two potential options:

- Option #1:
  User types input -> onChange event handler called -> We take value from input and make request to API -> ...wait..
  -> Get response -> Udpate _results_ piece of state -> Component re-renders, we show list of results

- Option #2:
  User types input -> onChange event handler called -> Update _term_ piece of state -> Component re-renders -> **We add code to detect that _term_ has changed!**
  -> Make request to API -> ...wait... -> Get response -> Update _results_ piece of state -> Component re-renders, we show list of results

Pros and Cons of Options

- Option #1:

  - Search instantly when onChange event triggers
  - Tightly couples onChagne event with search

- Option #2:
  - Search when _term_ piece of state changes
  - Can easily trigger a search when other parameters change! (Like if we wanted to add the ability to search by category)
  - Easier to extract code out into a more reusable function!

We will go with Option #2, and the **useEffect** hook will allow us to do so!

### The useEffect Hook

- Allows function components to use _something like_ lifecycle methods
- We configure the hook to run some code automatically in one of three scenarios:
  - 1 When the component is rendered for the _first time only_
  - 2 When the component is rendered _for the first time and whenever it re-renders_
  - 3 When the component is rendered _for the first time and (whenever it re-renders and some piece of data has changed)_

```js
import { useEffect } from 'react';

useEffect(() => {
  console.log('I was executed!');
});
```

- The second argument of _useEffect_ controls when the code gets executed.
  - Empty array: Run at initial render
  - Array with one or more elements inside of it: Run at initial render. Run after every render _if_ _any_ data in array has changed since last render
  - No argument: Run at initial render. Run after every re-render.
    - We will rarely use _useEffect_ this way, typically

### Async Code in useEffect

We want to use _useEffect_ to make our Wikipedia API call, both on initial render and every time our _term_ changes. But there's one issue: React does not allow us to mark the function we pass into _useEffect_ as async -- which is the type of function ours needs to be! There are 3 ways to resolve this:

1. Recommended approach. We create a helper function and then call it after:

```js
useEffect(() => {
  const search = async () => {
    await axios.get('whatever');
  };

  search();
}, [term]);
```

2. Define a function and immediately invoke it:

```js
useEffect(() => {
  (async () => {
    await axios.get('whatever');
  })();
}, [term]);
```

3. Just revert back to using normal Promises:

```js
useEffect(() => {
  await axios.get('whatever').then((response) => {
    console.log(response.data);
  });
}, [term]);
```

### Executing the Request from useEffect

Let's make our actual Wikipedia API request! Remember, when we pass axios.get a `params` object, whatever key/value pairs we add to it, axios will append to the query string and append to the URL automatically.

```js
useEffect(() => {
  const search = async () => {
    await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term,
      },
    });
  };

  search();
}, [term]);
```

### Default Search Terms

```js
// Add state for results
const [search, setSearch] = useState("Programming");
const [results, setResults] = useState([]);

// In our useEffect API call:
const search = ...call to axios...
setResults(search.data.query.search); // Arra of search results from wiki
```

We give _search_ state a default value that isn't empty, since Wikipedia doesn't like that.

### List Building!

Just more of the fundamentals - rendering a list of elements. For our Wikipedia results, we render `result.title` and `result.snippet`, as those are the pieces of information returned through our axios call that we are interested in.

_Oh no!_ We are rendering results that have HTML code in them. This looks ugly, so we need to find a way to remove it.

### XSS Attacks in React

We can get rid of the HTML span elements wrapping our results in two ways.

- Find every instance of the span and remove the opening and closing tags.
- Taking the HTML Wikipedia gives us and rendering it out as actual HTML.

We'll try option 2. But we have a string that we want to _turn into_ JSX. How do we do this?

- Purposly "hidden" feature in React we can use.
- `dangerouslySetInnerHTML` prop on an HTML element. We set it equal to an object with a key of `__html: result.snippet`

```js
<div>{result.title}</div>
<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
```

This renders the Wikipedia result correctly. But it's not recommended!

SSX is a cross-site scripting attack. This could allow some mailicious code to execute inside of our app. Our axios call could return some embedded HTML, which has some JavaScript code that executes. Do we trust Wikipedia enough to fix our article rendering bug this way?

### Linking to a Wikipedia Page

We ad an anchor element to each article result that's being rendered. We give it a href that will link to that Wikipedia result.

```js
<a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Visit Article</a>
```

### Only Search with a Term

We are getting an error when we are searching with an empty string. We fixed this when the Component first runs (by giving it initial search term state), but if the user manually deletes his search result completely, we get the error again. We fix this by just checking `if (term) search()`

### Throttling API Requests

We are making an API request each time we type a letter into the search bar. We should set a delay on that.
We'll allow the user to type as much as they please, and wait for a period of 500ms where no new input has occured. At this point we make our API call.

The logic we want may look like:

Input Change -> Set a timer to Search in 500ms
Input Change -> Cancel previous timer. Set a timer to Search in 500ms
Input Change -> Cancel previous timer. Set a timer to Search in 500ms
...500ms has passed...
No additional changes! -> Last timer created executes!

The act of delaying in this manner is called **Debouncing**

### Reminder on setTimeout

To achieve our desired throttling, we will use the `setTimeout` function that plain JavaScript provides.

```js
// In our axios.get call
const timeoutId = setTimeout(() => {
  if (term) search();
}, 500);
```

To cancel our timer, we need to call `clearTimeout()` and pass it a reference to the `setTimeout` call we made. But how can we somehow get this timer ID and cancel it the next time the user types something in?

### useEffect's Cleanup Function

We _could_ use a piece of state to cancel this timeout timer, but we can also use the power of **useEffect**! In it, we are allowed to return one possible value from the function we pass it: another function. It is here we can do any cleanup.

```js
useEffect(() => {
  return () => {};
}, [term]);
```

When we return this function, React will keep a reference to it. And it will call it at some future point in time.

- When our comp first renders, the overall arrow function is invokved, and we return our cleanup arrow function.
- Then, any time we run the arrow function again, React calls the cleanup it got from the last time useEffect ran, then it calls the overall arrow function again.

Initial Component Render -> Func provided to useEffect called. Return a cleanup function (and hold onto it)
Re-render -> Invoke the cleanup function! Then Func provided to useEffect called again. Return a cleanup function (and hold onto it).

### Implementing a Delayed Request

```js
useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (term) search();
  }, 500);
  return () => {
    clearTimeout(timeoutId);
  };
}, [term]);
```

Note that `clearTimeout` is called with the timeroutId of the _previous_ timer. This is why this cleanup approach for our setTimeout works.

The downside with our approach is that ther is now no initial search until 500ms after the app loads...

### Searching on Initial Render

We fix this by detecting whether or not this is the first time the component is being rendered.

```js
if (term && !results.length) search();
else {
  // setTimeout logic, same as it was in last code snippet
}
```

### Edge Case When Clearing Out Input Form

In the upcoming lecture, we will be adding a second useEffect to handle debouncing. In order to resolve the case where a user will clear out the input-form, we need to add a conditional (similar to the issue described in this earlier lecture). Look for solution a few lectures down.

### Optional Video - Fixing a Warning

Although our Search component is working, we have a warning in our console: `react Hook useEffect has a missing dependency: "results.length"`

**TODO**: I'm skipping this video for now.

Whenever we make reference to a piece of state or props inside _useEffect_, React (ESLint, really) wants us to list those references as dependencies.
So can we just add in results.length and fix this? Well, the warning went away. But now we have a bug: When we first load the app, we get _two_ requests when we only want one.

Why does adding result.length lead to this second request? Well, after our initial API request, _results_ gets updated, which causes a re-render. At this point the length of results has also changed, and since it is listed as a dependency we re-run the _useEffect_ function.

To actually fix this, we have to change our component by quite a bit.

- Intial Component Render -> term === "programming", debouncedTerm === "programming"
  - useEffect for debouncedTerm runs
  - Initial data fetch complete
- User Types Something -> Immediately update _term_ -> term === "programming bo"
  - Set a timer to update debouncedTerm
- User Tpes Something -> Cancel previous timer
  - Immediately update _term_ -> term === "programming books"
  - Set a timer to update debouncedTerm
- User Stops Typing 500ms -> debouncedTerm updated -> debouncedTerm === "programming boks"
- State update causes re-render -> useEffect watching "debouncedTerm" runs
  - Data fetched!

Final solution:

```js
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // Runs when term changes (each onChange of search input)
  // Queue up a state change to debouncedTerm, but cancel if not enough time passes, queue up new timer
  useEffect(() => {
    const timerId = setTimeout(() => {
      // We're going to set debounced ONLY if enough time passes
      setDebouncedTerm(term);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [term]);

  // Runs when debouncedTerm changes
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);
};
```

Note that if we type, say, "Flower" as the search term, and change it a little but quickly change it back to "Flower" (all before the debounce period is over), and then wait for the debounce to occur, there is no re-render. This is because React is seeing that the debouncedTerm state is the same value as previously, so it does not need to update it (remember the condition for the second useEffect argument -- whenever a re-render occurs **AND** the depency has **changed**)

### Dropdown Architecture

We will create a very simple, re-usable Dropdown widget. It will have a dropdown of color choices, where selecting one simply changes some text accordingly. Here's what it might look like:

- App: Will have a list of options. Provided as prop to the Dropdown component.
  - State: _selection_ which will record what the currently selected option is. Also provided as a prop to the Dropdown.
  - Options: Array of objects: { label: "A Shade of Blue", value: "blue" }
- Dropdown

### Scaffolding the Dropdown

We declare an array of _options_. We can put this anywhere -- inside or outside -- our app component since its value will never change.
We pass this array down to the Dropdown as an _options_ prop.

### A lot of JSX

In the Dropdown, we simply map over the _options_ prop and, using Material UI, give it a series of divs with appropriate className properties. For now we hard-code some rendered texts, but later we will refactor it to be more re-usable. Lots of styling with CSS; nothing new in terms of React.

### Selection State

Here we just set up a _selected_ state in App.js, and pass it (along with a callback to set it when it is changed, and a list of dropdown options) to the Dropdown component. Nothing new or complex. Give each mapped options item in Dropdown an _onClick_ event handler that calls the callback prop passed to Dropdown, which sets it as the newly-selected option.

### Filtering the Option List

Here we learn that _null_ in React (when used when returning JSX is expected) means do not render _anything_. We use this fact to skip rendering a mapped list item whos _value_ property is equal to the currently selected option's value -- as it would be odd to see the current selection as an option in the dropdown.

### Hiding and Showing the Option List

In order to toggle certain classes required for Semantic UI to show / hide the Dropdown appropriately, we add a new piece of state to Dropdown: _open_. We give the Dropdown an _onClick_ handler that toggles the value of _open_, which in turn is used as a conditional check to add some classes to various divs of the Dropdown. Mostly Semantic UI related, so I won't be too detailed on the notes.

### Err...Why is this Hard!

To close our Dropdown, we can't click _outside_ the Dropdown to close it (as is pretty standard user experience). How do we accomplish this, and why is it so challenging? We will spend the next few lectures covering why.

- Dropdown component can only set up event handlers _easily_ (using JSX props) on elements it creates. The Dropdown cannot set up an event handler on the _body_, for example, or any other Component or div that might exist inside of our app. We want to listen to click events being issued outside of the Dropdown.

### Reminder on Event Bubbling

Whenever a user clicks on an item, the event does not stop there. Instead, the event object travels up to the next parent element, and if that element has a click event handler on it as well, it is automatically invoked. The event object then goes up to the next parent element, and this process repeats, calling each click event along the way. This is **event bubbling** - as the event is bubbling up the DOM. This is why when we click our desired Dropdown option from the list, it is set as the _selected_ option (due to its onClick handler's logic), but also the Dropdown closes (which is not part of its onClick logic, but rather one if its parent's, being called automatically).

### Applying What We've Learned

Why is the concept of _event bubbling_ relevant to our problem here?

Let's recap what we have so far:

- The Dropdown needs to detect a click event on _any element_ besides one it created
- The Dropdown has a hard time setting up event handlers on elements that it does not create
  - Not impossible, just challenging!
- Event bubbling is a thing

The solution?

- The Dropdown can set up a manual event listener (without React) on the _body element_
- A click on _any element_ will bubble up to the body, calling its _onClick_ handler!

```js
document.body.addEventListener('click', () => {});
```

### Binding an Event Handler

Where can we set up this event lisener on the body? In a _useEffect_ call in our Dropdown.

```js
useEffect(() => {
  document.body.addEventListener(
    'click',
    () => {
      setOpen(false);
    },
    { capture: true }
  );
}, []);
```

This looks correct, but now when we click on the Dropdown and click on an option, it stays open. It _only_ closes when an outside element is clicked. Why is this?

### Why Stay Open?!

Our DOM looks like this (pointing out only the 3 elements with onClicks): body -> Dropdown.selection -> Dropdown.selection.menu.item
So logically, we may think that clicking on item would result in this order of the event bubbling: item -> selection -> body.

But let's observe the order each of our _onClick_ events is being invoked (we console.log each):

- Body -> Item -> Dropdown!

Reason for this?

- All the event listeners wired up manually (using _addEventListener_) get called _first_!
- _After_ all those are called, the React event listeners get called, from most-child element to most-parent (as expected)

So in our Dropdown, we first set _open_ to false (in body), then update our currently selected option (in item div), and finally toggle the value of _open_ (in selection div). So we are basically closing the Dropdown and quickly toggling it, thus re-opening it!

### Which Element Was Clicked?

To address this, now understanding the actual problem, we have two scenarios to consider:

- Scenario #1: User clicks on an element that is created by Dropdown component -> If a user clicks on one of these elements, then we probably _don't_ want the body event listener doing anything.
- Scenario #2: User clicks on an element besides the ones created by the Dropdown -> If a user clicks on any of these elements, we _do_ want the body event listener to close the dropdown.

Whenever a user clicks on an element, we are going to allow that event to propagate around our entire DOM structure. It's technically possible to cancel event bubbling, but that is bad practice! Instead, we will just conditionally see if we should close the dropdown or not, based on if we're clicked inside or outside the Dropdown.

But how do we figure this out?

- Easy to figure out which element was clicked: `event.target` in our event handler.
- But how to figure out if it's created by or Dropdown component?
  - By making use of **useRef** hook! We will set up a reference to our top-level element inside the Dropdown, and use that to decide whether the element we clicked was contained inside the Dropdown or not.

### Making use of useRef

```js
const dropdownRef = useRef(); // Undefined until after first render

useEffect(() => {
  document.body.addEventListener("click", (event) => {
    // Were we clicked inside the Dropdown?
    if (dropdownRef.current.contains(event.target)) setOpen(false);
  })
}, []);

return (
  <div ref={dropdownRef} className="ui form">
)
```

### Body Event Listener Cleanup

In App.js, we add a new piece of state for showing the dropdown or not. We add a button with an event that togles this state. We wrap the Dropdown element (in the App's returned JSX) in a conditional, only rendering it if the _showDropdown_ state is true. Now if we hit the button and hide the Dropdown, and then click anywhere else on the screen, we get an error message! "Cannot read property 'contains' of null". This is happening from our event listener on the body.

Why is this happening?

- Whenever we remove a component from the DOM, all the **refs** that are attached to it get set to null (more specifically, the **ref.current** property) since we no longer have an element to refer to. But our event listener on the body is still set up, so we will run into the `ref.current` piece of code and encounter an error.

Solution?

- Whenever we are about to remove the Dropdown component from the DOM, we should turn off the event listener it attached to the body element.
- So we will make use of the cleanup function that _useEffect_ allows!

```js
useEffect(() => {
  // We now need reference to the handler, so we refactor it slightly
  const onBodyClick = (event) => {
    if (ref.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  document.body.addEventListener("click", onBodyClick);

  return = () => {
    document.body.removeEventListener("click", onBodyClick);
  }
})
```

- Important take-away is that we can call **removeEventListener** on elements, reference the type of event we want to remove from and the specific event listener we want removed.
- **Thinker:** Could we not just return early if `ref.current` is a falsey value?

### The Translate Widget

The final widget in this Widgets app is a language translation app. We will re-use the Dropdown component from the previous widget, which is used to specify which language we want to translate to.

Our Architecture

- App
- Translate Component: States for _options_, _language_ and _setLanguage_ callback
  - Shows an instance of a Dropdown component
  - Shows an instance of a Convert component
- Convert: Takes in text and a language and doing the translation logic
- Dropdown: Able to select our language

- Options will be an array of objects: { label: "Hindi", value: "hi" }
  - Stores language and language code
  - Passed down as a prop into the Dropdown, along with the currently selected language and a _setLanguage_ callback

### Scaffolding the Translate Component

Here we create the skeleton of the Translate component. It imports a Dropdown and defines an array of language option objects. Defines a _language_ state, setting its default value to the first element in the language options array.

Returns the Dropdown as JSX, passing it the language options array as a prop, and a _selected_ prop that points to the _language_ state, as well as a _handleSelectedChange_ prop that points to _setLanguage_. Note the last two prop names are important, as those are the names our pre-existing Dropdown component expects.

### Adding the Language Input

We have the Dropdown displaying, but it's asking us to "Select a Color"! We are trying to select a language. So let's make the Dropdown we created as the last widget more re-usable. We give the Dropdown a prop called _label_. We then reference this label in the JSX and display it instead of the hard-coded "Select a color".

Back in our Translate component, we now give it a _text_ state. We create a normal input element in our Translate component, setting its _value_ to our _text_ state, and giving its _onChange_ event a reference to _setText(event.target.value)_. We then add Semantic UI styling.

### Understanding the Convert Component

Convert Component

- Takes in a _language_ and _text_
- "Convert" is triggered
- A new value of _language_ or _text_ has appeared! We should convert it and show the output
- Make request to Google Translate API -> text + language code -> Google Translate API
- Google API sends a response back -> Update state with data from response
- Show data from response on the screen

Google Translate API

- cloud.google.com/translate/docs
- This is a _paid API_. Stephen gives us an API key that we can use for free!
- _His_ API key will only work if we run our app on localhost:3000

### Building the Convert Component

We begin our Convert component. It receives _language_ and _text_ props. We know we want something to happen when either of those props are changed, so we use \*_useEffect_, listing those as dependencies. We import the Convert component in our Translate component, passing down the _language_ and _text_ states to it.

### Using the Google Translate API

We `npm install axios`, and `import axios from 'axios';` in our Convert component.
To make the Google API request, noting to that second argument to axios in a post request is some information to send along in the body (but we don't need to, Google just wants query string params):

```js
axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
  params: {
    q: text,  // Text state, grabbed from user input
    target: language.value, // Language code
    key: <OurAPIKey>
  }
});
```

### Displaying Translated Text

We need to take our Google response and display it to the screen, as the converted text. We create a new _translated_ state in our Convert component. We put our axios.post call in its own async helper function (inside useEffect still), call that function, and using the _data_ we get back from our axios call we `setTranslated(response.data.data.translations[0].translatedText)`. (Note the first data variable is what axios returns as a property of its _response_, the second is the object Google returns that we are interested in, and we then dive deeper into an array of translations - focusing on the first one - and its translatedText property). We then return _translated_ state as JSX.

### Debouncing Translation Updates

We have our translation working, but we are making Google API calls every single keypress to the text input! We want to limit this using **debouncing**. This will be done identical to how we did so in our Search widget. We will now have a **debouncedText** state, along with the **text** state we already have. We will have two useEffects:

- useEffect #1:

  - Set a timer to update _debouncedText_ in 500ms
  - Return a cleanup function that cancels this timer

- useEffect #2:
  - Make a request with _debouncedText_

```js
// useEffect #1
useEffect(() => {
  const timerId = setTimeout(() => {
    setDebouncedText(text);
  }, 500);

  return = () => {
    clearTimeout(timerId);
  }
}, text);
```

```js
// useEffect #2
useEffect(() => {
  const translate = async () => {
    const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
      params: { q: debouncedText,  target: language.value, key: <OurAPIKey> }
    });

    setTranslated(data.data.translations[0].translatedText);
  }

  translate();

}, [debouncedText])
```

## Section 13 - Navigation From Scratch

`Originally Started: 12/16/2021`

### Navigation in React

Typically, `React-Router` is used for Routing in React projects. But in order to learn the fundamentals behind it (and the fact that React Router changes so often), we will implement routing from scratch. We will incrementally learn how to do routing-type features.

### Basic Component Routing

`window.location` is automatically updated when we navigate to different URLs. It contains information such as host, hostname, and what we care about most, `pathname`. Pathname is relative to our index route, i.e at http://localhost:3000/translate, the `pathname` would be "translate"

So we could create a function for each component / route we want to handle, and render it conditionally:

```js
const showAccordion = () => {
  if (window.location.pathname === "/accordion" { return <Accordion items={items} /> }; )
}

const showList = () => {
  if (window.location.pathname === "/list" { return <Search /> }; );
}

return (
  <div>
  {showAccordion}
  {showList}
  </div>
)
```

But this way is very repetitive, and a lot of logic is shared.

### Building a Reusable Route Component

We could make a reusable function that takes in a route and component...

```js
const showComponent = (route, component) => {
  return window.location.pathname === route ? component : null;
};
```

But this isn't a very React way of doing things! We could make it a Component instead:

```js
// Route.js
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;

// App.js
return (
  <div>
    <Route path='/accordion'>
      <Accordion items={items} />
    </Route>
    <Route path='/list'>
      <Search items={items} />
    </Route>
  </div>
);
```

### Handling Navigation

With our custom Route component in place, as well as creating navigational links to reach the URLs that render those components, we still have an issue: Whenever we click on a navigation link, we reload the entire index.html file, and reload all the CSS / JS as well. This is not the React way! There is no reason to reload all these assets. We need to make it so only the URL updates, but no requests are made and no reloads are made.

Ideally, we want this process:

- User clicks on "List" (or another link)
- Change the URL, but don't do a full page refresh!
- Each Route could detech the URL has changed
- Route could update piece of state tracking the current pathname
- Each Route re-renders, showing/hiding components appropriately

### Building a Link / Changing the URL

We can create a `Link` component, with an onClick handler. This handler will build a NavigationEvent, which will then be sent off to every Route component in our app. It will let them know of URL changes. The Route can then decide if it should render its child components.

```js
// Link.js
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Prevent full-page reload!
    event.preventDefault();

    // Navigate to the href prop
    window.history.pushState({}, "", href);

    // Communicate to Route components that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return <a onClick={onClick} className={className} href={href}>{children}</a>;
};

export default Link;

// In Header.js
const Header = () => {
  return (
    <div>
      <Link href="/accordion">Accordion</Link>
      <Link href="/list">Search</Link>
    </div>
}
```

### Detecing Navigation

```js
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      console.log('Location Changed!');
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // return window.location.pathname === path ? children : null;
  return currentPath === path ? children : null;
};
```

Now the URL updates, and we can detect in the Route component that a change has occured. The final thing we need is to have the Route component update some piece of state when the URL updates, and determine if it should be shown.

### Updating the Route

We will introduce a piece of state in the Route component whose sole purpose is to get the Route component to re-render itself when `window.location.pathname` changes. See the code in the above lecture's notes for where this state logic was coded.

There's actually one more feature we can add -- the ability to open a link in a new tab!

### Handling Command Clicks

Making it so a user can cmd + click / ctrl + click a Link is rather easy. We just check if the appropriate key is being pressed down when the Link is clicked (depending on if the user is on Mac or Windows) and then return from the onClick event early, letting the Link be handled normally (i.e new request, page refreshed).

```js
// Link.js
const onClick = (event) => {
  if (event.metaKey || event.ctrlKey) {
    return;
  }

  event.preventDefault();
  // etc
};
```

### `Section Completed: 12/16/2021`

## Section 14 - Hooks in Practice

`Originally Started: 12/16/2021`

## Project Overview

This section will just be our Youtube app redone, this time utilizing Hooks! This will be rather easy, so I will be skimpy on the notes.

### Removing Callback

**IMPORTANT** Stephen points out that

```js
<VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />
```

is the same as removing the arrow function all together:

```js
<VideoList videos={videos} onVideoSelect={setSelectedVideo} />
```

### Overview on Custom Hooks

To make reusable code when are we making use of function components and hooks, we create **Custom Hooks**
We will make a custom hook for our video fetching logic.

Custom Hooks

- Best ways to create reusable code in React project (besides components!)
- Created by extracting hook-related code out of functional components (Not focused on JSX -- just the stuff at the top of a component)
- Custom hooks _always_ make use of at least one primitive hook internally (useState, useEffect, etc). We are not making something _like_ useEffect or useState, as one often confuses the term "custom hook" with.
- Each custom hook should have _one purpose_
  - E.g fetching video logic, OR selecting a video logic. But _not both_!
- Kind of an art form!
  - Difficult to have a list of steps to know what should be a custom hook. Just takes practice
- Data-fetching is a great thign to make reusable

### Process for Building Custom Hooks

Even though creating custom hooks is more of an art-form, we can try our best to develop a process for it!

- Identify each line of code related to some single purpose in an existing component
- Identify the _inputs_ to that code
- Identify the _outputs_ to that code
- Extract all of the code into a separate function, receiving the inputs as arguments, and returning the outputs

Looking at our video searching app, we can identify our inputs (default search term) and outputs (list of videos, function to search videos). We can create the hook by thinking:

- "If you give me (the custom hook) a
  - a _default search term_
- I will give you (the developer)
  - a _way to search for videos_
  - a _list of videos_"

### Extracting Video Logic

- Typically put hooks in a "hooks" folder
- Typically give them a name with "use" in front, like "useVideos"
- Can return our outputs as either an array (the React way) or an Object (more of a JS way)

```js
import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  // Return list of videos, function used to search videos
  return [videos, search];
};

export default useVideos;
```

### Using the Custom Hook

```js
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return JSX;
};
```

### `Section Completed: 12/16/2021`

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
<<<<<<< HEAD
=======

</details>
>>>>>>> 2f09f21541fc6c629d5bb5edbf8b464a24f5c99d
