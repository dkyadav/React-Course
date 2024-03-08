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

- Javascript XML. Should be a valid XML with opening and closing tags. 
- Write JS/HTML in React. Place HTML elements in DOM without using createElement()
- JS code can be written in curly brackets { }. JSX will execute the expression wihtint { } and return the result.
- Use className isntead of class. Any other CSS property as camel case.


---

</details>

<!-- <details>
<summary>Basics is React.js</summary> -->

### Components

#### Class Components

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
    * **constructor()**
    * static getDerivedStateFromProps()
    * **render()**
    * componentDidMount() [useEffect() in Functional comp]
1. Updating
    * getDerivedStateFromProps - same as mounting
    * shouldComponentUpdate()
    * render() - same as mounting
    * getSnapshotBeforeUpdate()
    * componentDidUpdate() [useEffect() in Functional comp]
1. Unmounting
    * componentWillUnmount()
    


---

<!-- </details> -->
