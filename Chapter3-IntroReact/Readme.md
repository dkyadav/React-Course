# Introduction to React.js

<details>
<summary>What is React.js</summary>

### Intro

-   React is a JavaScript library for building user interfaces.
-   React is used to build single-page applications.
-   React allows us to create reusable UI components.

Note: You'll need to have Node >= 14 on your local development machine

```
npx create-react-app my-app
cd my-app
npm start
```

or,

```
npm init react-app my-app
```

create-react-app includes built tools such as webpack, Babel, and ESLint.

### Virtual DOM

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
React only changes what needs to be changed!

### Example

[Example of basic inclusion of js file](index.html)

### JSX

-   Javascript XML. Should be a valid XML with opening and closing tags.
-   Write JS/HTML in React. Place HTML elements in DOM without using createElement()
-   JS code can be written in curly brackets { }. JSX will execute the expression wihtint { } and return the result.
-   Use className isntead of class. Any other CSS property as camel case.

---

</details>

<details>
<summary>Basics is React.js</summary>

## Components

### Class Components

Export and Import from Class and Functional Component
**Exports**

```
export default class ClassName extends React.Component {}
import AnyName from './ClassName.js';
```

**Named**

```
export class ClassName extends React.Component {}
import { ClassName } from './ClassName.js';
```

[Example](./my-app/src/examples/ClassComponent.jsx)

### Lifecycle of Class Components

1. Mounting
    - **constructor()**
    - static getDerivedStateFromProps()
    - **render()**
    - componentDidMount() [useEffect() in Functional comp]
1. Updating
    - getDerivedStateFromProps - same as mounting
    - shouldComponentUpdate()
    - render() - same as mounting
    - getSnapshotBeforeUpdate()
    - componentDidUpdate() [useEffect() in Functional comp]
1. Unmounting
    - componentWillUnmount()

Example: <br>
[ClassComponent basic](./my-app/src/examples/ClassComponent.jsx) <br>
[Class Component Life Cycle](./my-app/src/examples/CCLifeCycle.jsx) <br>
[Functional Component Life Cycle](./my-app/src/examples/FCLifeCycle.jsx) <br>

### Functional Components

[Functional component basic with props](./my-app/src/examples/BasicFC.jsx)

**FC State, List, Conditions, Events:**

[FC_state_list_con_event](./my-app/src/examples/FC_state_list_con_event.jsx)

**Form handling:**

[FC_Forms](./my-app/src/examples/FC_forms.jsx)

---

</details>

<details>
<summary>Router</summary>

## Router

```
npm i react-router-dom
```

**React Router v6**

For Routing to components

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

For Link ing internally

```
import { Outlet, Link } from "react-router-dom";
```

[Example of Router](./my-app/src/RouteMain.jsx)

---

</details>

<!-- <details>
<summary>Hooks</summary> -->

### useState()

### useEffect()

Mostly used for fetching data, calling external API after component is rendered

```
import { useEffect } from 'react';
useEffect(<setup function>, dependencies?)
```
[Example](./my-app/src/examples/hooks/UseEffect.jsx)

### useContext()

To create context, Import createContext and initialize it:

```
import { createContext } from "react";
const UserContext = createContext()
```

Wrap components in the **_Context Provider_** and supply the state value.

```
<UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    <Component2 user={user} />
</UserContext.Provider>
```
Access context in child component using ***useContext*** hook
```
const user = useContext(UserContext);
```
[Example](./my-app/src/examples/hooks/UseContext.jsx)

### useRef
* The useRef Hook allows you to persist values between renders.
* It can be used to store a mutable value that does not cause a re-render when updated.
* It can be used to access a DOM element directly.
* useRef() only returns one item. It returns an Object called ***current***
```
import { useEffect, useRef } from "react";
const useRefRet = useRef({name: "Deepak",totalrender: 0});
```
[Example](./my-app/src/examples/hooks/UseRef.jsx)

### useReducer
* The reducer function contains your custom logic to change initial state provided. 
* Reducer function usually have two arguments. 1)state 2)action
* The useReducer Hook returns the current state and a dispatch method.
```
import { useReducer } from "react";
const [todos, dispatch] = useReducer(red, initialTodos);

const red = (state, action) => {
    return state;
}
```
[Example](./my-app/src/examples/hooks/UseReducer.jsx)

### useCallback
* Caching resource intensive functions so that they will not automatically run on every render.
* useMemo returns a memoized value and useCallback returns a memoized function
* One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
* Prob: "referential equality"=>Every time a component re-renders, its functions get recreated
* Sol: We can use the useCallback hook to prevent the function from being recreated unless necessary.
```
const addTodo = useCallback(() => {
   setTodos((t) => [...t, "New Todo in CB"]);
}, [todos]);
```
The component using state 'todos' will only re-render when the todos prop changes.
[Example](./my-app/src/examples/hooks/UseCallback.jsx)

### useMemo
* Caching a value so that it does not need to be recalculated.
```
const [count, setCount] = useState(0);
const [todos, setTodos] = useState([]);
const calculation = useMemo(() => expensiveCalculation(count), [count]);
```
expensiveCalculation depending on state: count. So calculated everytime only state 'count' changes it triggers, not on 'todos'
[Example](./my-app/src/examples/hooks/UseMemo.jsx)

---

<!-- </details> -->

<!-- useState
setState(arg)
arg would be new state, either new string,obj,array
or updater function. That will be a pure function means: should take the pending state as its only argument, and should return the next state -->
