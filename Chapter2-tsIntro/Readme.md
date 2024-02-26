### Intro
Detecting errors in code without running it is referred to as static checking. Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking.

TypeScript checks a program for errors before execution, and does so based on the kinds of values, making it a static type checker.

```
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;
```

Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?

Test using [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

There are three main primitives in JavaScript and TypeScript.
* boolean - true or false values
* number - whole numbers and floating point values
* string - text values like "TypeScript Rocks"
* any
* unknown
* undefined and null
* never-> throws error

Interfaces are similar to type aliases, except they only apply to object types.
[one.ts](one.ts)
[two.ts](two.ts)
[class.ts](class.ts)



