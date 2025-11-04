## 📘 React Study Notes — `useState`, Hooks, and Counter Logic

---

### 🔹 Why `{" "}` shows only one space

In JSX:

```jsx
<button>Click</button>{" "} <button>Next</button>
```

The `{" "}` just adds a **single blank space** between elements —
no matter how many spaces you add inside it, React collapses them into **one space** (like HTML does).
👉 It’s used to insert space **between two JSX tags** cleanly.

---

### 🔹 Why `counter` changes in console but not on screen

```js
let counter = 15

const addValue = () => {
  counter = counter + 1
  console.log(counter) // ✅ updates in console
}
```

You see the value change in console because it’s just a **normal JS variable**,
but React **doesn’t know** it changed — so it **does not re-render the component**.

React only re-renders when **state changes** — and that’s where `useState()` comes in.

---

## 🧠 What is a Hook in React?

**Hooks** are **special functions** that let you “hook into” React features.

They all start with the word **`use`** (like `useState`, `useEffect`).

👉 They let functional components:

* Remember values (`useState`)
* Run code on lifecycle events (`useEffect`)
* Access context or refs (`useContext`, `useRef`)

---

## ⚙️ What is `useState()`?

`useState` is the most common and basic hook.
It allows a component to **store and update dynamic values**.

### 🔸 Syntax:

```js
const [variable, setVariable] = useState(defaultValue)
```

### 🔸 Example:

```js
const [counter, setCounter] = useState(15)
```

* `counter` → current value
* `setCounter` → method to update value
* `15` → default value

---

### 🔸 How they are linked

When you call:

```js
setCounter(counter + 1)
```

React internally:

1. Updates the value of `counter`
2. Re-renders the component with the new value
3. Updates it everywhere `counter` is used in the JSX

So — **one update = reflected everywhere** (`<h1>`, `<footer>`, etc.)

---

### 🔸 Example (Full working code)

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)  // default value

  const addValue = () => {
    setCounter(counter + 1)
  }

  function removeValue() {   // normal function (not arrow)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with Saifi {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
```

---

## 🧩 What `useState()` can store

`useState()` can store **any datatype**:

| Data Type | Example                                |
| --------- | -------------------------------------- |
| Number    | `useState(0)`                          |
| String    | `useState("Saifi")`                    |
| Boolean   | `useState(true)`                       |
| Array     | `useState([1,2,3])`                    |
| Object    | `useState({ name: "Saifi", age: 25 })` |

React will re-render whenever you update it using the setter function.

---

## 💡 Why clicking one button updates value everywhere

Because in React, **state is shared inside a component render tree** —
the same `counter` variable is **used in multiple places**,
so when `setCounter()` updates it, React re-renders **every instance** of `counter` in the return.

That’s how React solved **Facebook’s “ghost update” problem** —
earlier, direct DOM manipulation caused UI inconsistencies.
React introduced a **virtual DOM + state system** so:

* The UI always reflects the *true state*
* No stale or “ghost” values remain in memory or screen

---

## ⚛️ Commonly Used Hooks in React

| Hook           | Purpose                                     |
| -------------- | ------------------------------------------- |
| `useState()`   | Manage state (dynamic values)               |
| `useEffect()`  | Run side effects (fetch data, timers, etc.) |
| `useRef()`     | Access DOM elements directly                |
| `useContext()` | Access global values (like theme, user)     |
| `useReducer()` | Manage complex state logic                  |
| `useMemo()`    | Optimize performance with memoization       |

---

## 🧾 Summary for Your Notes

| Concept                          | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| `{" "}`                          | Adds a single space between JSX elements             |
| Normal variable (`let`, `const`) | Does not cause re-render in React                    |
| `useState()`                     | React Hook that stores and updates data              |
| Structure                        | `[value, setValue] = useState(defaultValue)`         |
| Default value                    | Passed inside `useState()`                           |
| Data types                       | Can store numbers, strings, arrays, objects          |
| Update method                    | `setValue(newValue)` triggers re-render              |
| Button update effect             | Updates reflected everywhere in component            |
| Facebook ghost problem           | Solved by using **virtual DOM** + **state sync**     |
| Normal function example          | `function removeValue() { setCounter(counter - 1) }` |

---

✅ **In short:**

> `useState` lets React remember changing values and automatically re-render the UI —
> fixing the old problem where the screen didn’t match the data behind it.

---
