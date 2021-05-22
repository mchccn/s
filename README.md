| [a](https://www.npmjs.com/package/@cursorsdottsx/a)
| [b](https://www.npmjs.com/package/@cursorsdottsx/b)
| [c](https://www.npmjs.com/package/@cursorsdottsx/c)
| [d](https://www.npmjs.com/package/@cursorsdottsx/d)
| [e](https://www.npmjs.com/package/@cursorsdottsx/e)
| [f](https://www.npmjs.com/package/@cursorsdottsx/f)
| [g](https://www.npmjs.com/package/@cursorsdottsx/g)
| [h](https://www.npmjs.com/package/@cursorsdottsx/h)
| [i](https://www.npmjs.com/package/@cursorsdottsx/i)
| [j](https://www.npmjs.com/package/@cursorsdottsx/j)
| [k](https://www.npmjs.com/package/@cursorsdottsx/k)
| [l](https://www.npmjs.com/package/@cursorsdottsx/l)
| [m](https://www.npmjs.com/package/@cursorsdottsx/m)
| [n](https://www.npmjs.com/package/@cursorsdottsx/n)
| [o](https://www.npmjs.com/package/@cursorsdottsx/o)
| [p](https://www.npmjs.com/package/@cursorsdottsx/p)
| [q](https://www.npmjs.com/package/@cursorsdottsx/q)
| [r](https://www.npmjs.com/package/@cursorsdottsx/r)
| **s**
| [t](https://www.npmjs.com/package/@cursorsdottsx/t)
| [u](https://www.npmjs.com/package/@cursorsdottsx/u)
| [v](https://www.npmjs.com/package/@cursorsdottsx/v)
| [w](https://www.npmjs.com/package/@cursorsdottsx/w)
| [x](https://www.npmjs.com/package/@cursorsdottsx/x)
| [y](https://www.npmjs.com/package/@cursorsdottsx/y)
| [z](https://www.npmjs.com/package/@cursorsdottsx/z)
|

**S is for Switch**

# @cursorsdottsx/s

Functional switch blocks for comparing numbers. Switch was never that good or useful. With this small library, at least it's good with numbers.

Super easy to add and install:

```bash
npm install @cursorsdottsx/s
```

```bash
yarn add @cursorsdottsx/s
```

And also super easy to use:

```js
import Switch from "@cursorsdottsx/s";
```

After you import the library, it will attach a global function named `Switch` that's easy to use.

`Switch(values, cases)`

-   `values` – An object with the values to compare.
-   `cases` – All the cases.

Example:

```js
const x = 10;

Switch(
    { x },
    {
        ["x > 5"]() {
            console.log("Greater than 5.");
        },
        ["default"]() {
            console.log("Less than 5.");
        },
    }
);
```

Switch supports 6 comparators, `>`, `<`, `>=`, `<=`, `=`, and `!=`. It also supports `&` for joining two comparisons like this:

```js
const x = 10;
const y = 5;

Switch(
    { x, y },
    {
        ["x > 5 & y > 5"]() {
            console.log("Both greater than 5.");
        },
        ["default"]() {
            console.log("One is less than 5.");
        },
    }
);
```

The `default` case is optional, and you can have as many cases as you'd like. Only one case gets executed and its return value is `Switch`'s return value.

Each comparison **must** be in the format `identifier comparator value`, though this may change in the future.

If there are any features you'd like to add, please either open an issue or pull request!

[npm abc's homepage](https://codepen.io/cursorsdottsx/full/KKWNRaY)
