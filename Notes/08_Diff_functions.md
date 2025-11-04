Both ways —

```js
const addValue = () => { ... }
```

and

```js
function removeValue() { ... }
```

are **valid** in React.
The difference lies in **how JavaScript defines and stores functions** in memory, not in React itself.

---

## 🧠 Deep explanation

There are **two main ways** to create functions in JavaScript:

### 1️⃣ Function Declaration

```js
function removeValue() {
  setCounter(counter - 1)
}
```

* **Hoisted** — JavaScript loads this function **before the code runs**.
  So you can even call it *before* it’s written.
* It’s stored directly in memory as a named function.
* Commonly used for *traditional functions*.

✅ Example:

```js
sayHi() // works even before declared

function sayHi() {
  console.log("Hello")
}
```

---

### 2️⃣ Function Expression (or Arrow Function)

```js
const addValue = () => {
  setCounter(counter + 1)
}
```

* **Not hoisted** — it’s just a variable holding a function value.
* Created only **when that line of code executes**.
* Common in React because it fits the “inline logic” style (especially for small event handlers).

❌ Example:

```js
sayHi() // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi = () => {
  console.log("Hello")
}
```

---

## ⚙️ In React context

Both are fine to use inside components — React doesn’t care which form you choose.

We often use:

```js
const addValue = () => { ... }
```

because:

* Arrow functions automatically **bind the component’s context** (so they behave correctly with `this`, though in functional components `this` isn’t used much).
* They make your code consistent with **modern ES6 style**.

But you could just as well write:

```js
function addValue() { ... }
```

and it would work exactly the same here.

---

## 💡 Quick comparison table

| Type                            | Syntax                      | Hoisted? | Common in React?                          | Example                |
| ------------------------------- | --------------------------- | -------- | ----------------------------------------- | ---------------------- |
| **Function Declaration**        | `function removeValue() {}` | ✅ Yes    | ✅ Often for simple or reusable functions  | Used for `removeValue` |
| **Function Expression (Arrow)** | `const addValue = () => {}` | ❌ No     | ✅ Very common (especially event handlers) | Used for `addValue`    |

---

## ✅ Summary for your notes

* `const addValue = () => {}` → **arrow function stored in variable**, not hoisted.
* `function removeValue() {}` → **regular function**, hoisted and directly available.
* Both work the same in React for small event handlers.
* Arrow functions are **preferred** in React components for clean, modern syntax.

---
