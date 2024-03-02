# Javascript

<details>
<summary>Basic Javascript</summary>

### History

```
1. The Original JavaScript ES1 ES2 ES3 (1997-1999)
2. The First Main Revision ES5 (2009)
3. The Second Revision ES6 (2015)
4. The Yearly Additions (2016, 2017 ... 2021, 2022)
```

### Example

[Example of basic inclusion of js file](index.html)

---

</details>

<details>
<summary>DOM and BOM</summary>

### Document Object Model (DOM)

is a programming interface for HTML and XML documents, that allows to create, manipulate, or delete the element from the document. It defines the logical structure of documents and the way a document is accessed and manipulated.

-   **getElementById()** Method
-   getElementsByClassName() Method
-   getElementsByName() Method
-   getElementsByTagName() Method
-   querySelector() Method: (first element that matches a specified CSS selector(s) in the document)
-   querySelectorAll() Method

### Browser Object Model (BOM)

all the objects exposed by the web browser. The BOM allows JavaScript to “interact with” the browser. The **_window_** object represents a browser window and all its corresponding features.

Few common

-   innerHeight
-   innerWidth
-   screen
-   history
-   location

which allow you to access information about the current window, the screen on which it is displayed, and the web browser.

Some methods:

-   window.open() - open a new window
-   window.close() - close the current window
-   window.moveTo() - move the current window
-   window.resizeTo() - resize the current window

The **_screen_** object contains information about the user's screen.

The window.screen object can be written without the window prefix.

Properties:

-   screen.width
-   screen.height
-   screen.availWidth
-   screen.availHeight
-   screen.colorDepth
-   screen.pixelDepth

---

</details>

<details>
<summary>Intervals and Objects</summary>

[Intervals](interval.html)
[Timeouts](timeout.html)

### Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
[Objects](object.html)

---

</details>

<details>
<summary>Prototype, Hoisting and Closure</summary>

### Prototype

Enhance property/method of existing Object
[Prototype](proto.html)

### Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top.
To avoid bugs, always declare all variables at the beginning of every scope.
JavaScript in strict mode does not allow variables to be used if they are not declared.
[Hoist](hoist.html)

### Closure

A function that has access to all of the variables that were in scope when it was declared.

A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.

The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
[closure](closure.html)

**Uses**:

-   Data Privacy
-   Function factories/HOF
    [closure_hoc](closure_hoc.html)
    [closure_hoc1](closure_hoc1.html)

#### HOF

A higher-order function is a function that either takes one or more functions as arguments or returns a function.

---

</details>

<details>
<summary>Let, Const, Arrow, Class and Inheritance</summary>

ES6 2015 introduced Let and Const
[variables](variables.html)
[class](class.html)
[arrow](arrow.html)

---

</details>

<details>
<summary>Map, Filter, Reduce, Template Literals</summary>
### Map
The map method is used to create a new array with the result of a callback function called on each element in the original array.

### filter

Method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

### Reduce

Method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.
The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.

[map_filter_reduce](map_filter_reduce.html)

---

</details>

<details>
<summary>Loops</summary>

-   for loop
-   while loop
-   do-while loop
-   for-in loop
    The JavaScript for in loop is used to iterate the properties of an object.
-   for-of
    JS for-of loop is used to iterate the iterable objects for example – array, object, set and map.

---

</details>
