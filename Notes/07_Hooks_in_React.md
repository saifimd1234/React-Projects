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

## 🔎 What’s happening

When you do this:

```js
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
```

each `setCounter` uses the **same current `counter` value** (the one captured when the handler started). React **batches** those updates together and schedules **one re-render**. Because every call computed the *same* new value (`counter + 1`), the final result is effectively **only +1**.

---

## 🧠 Why batching?

React groups multiple state updates that happen during the same event (or same tick) to avoid repeated re-renders — this is called **batching**. It improves performance by doing one render instead of many.

In modern React (React 18+) automatic batching is broader (event handlers, promises, timeouts, etc.), but the key point for you: **multiple setState calls that compute new state from the old state must use the functional updater form** to avoid stale reads.

---

## ✅ Correct approach — functional updater

Use the functional form `setCounter(prev => prev + 1)`. That way each queued update applies to the latest value:

```js
const addValue = () => {
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
  setCounter(prev => prev + 1)
}
```

This will increase the counter by **4**.

Why it works: each `prev` is taken from the state as updated by prior queued updates, not from the stale `counter` variable.

---

## Alternative (simpler) — update by 4 at once

If you want +4 in one go, you can also:

```js
setCounter(prev => prev + 4)
```

This is clearer and avoids multiple calls.

---

## Notes on `console.log` and timing

* `setCounter` is **asynchronous** (it schedules a state change).
* `console.log(counter)` inside the handler will still show the **old** value. To see the new value, use `useEffect` that depends on `counter`:

```js
useEffect(() => {
  console.log("counter updated:", counter)
}, [counter])
```

---

## Optional: force immediate update (rare)

If you absolutely need the update to be applied synchronously (not recommended as default), React exposes `flushSync` from `'react-dom'`:

```js
import { flushSync } from 'react-dom';

const add = () => {
  flushSync(() => setCounter(c => c + 1));
  // now counter updated synchronously for the rest of this tick
}
```

Use `flushSync` sparingly — it breaks batching and can harm performance.

---

## Short summary for your notes

* **Batching** groups updates and causes one re-render for multiple `setState` calls.
* Calling `setCounter(counter + 1)` multiple times uses the same stale `counter` value → result +1.
* **Use functional updater** `setCounter(prev => prev + 1)` to queue increments safely; repeating it 4 times gives +4.
* Or use `setCounter(prev => prev + 4)` to update by 4 in one call.
* `setState` is async — use `useEffect` to observe updated values.
* `flushSync` forces synchronous updates (use rarely).

---
