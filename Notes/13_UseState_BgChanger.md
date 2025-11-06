## 🧠 React Study Note: `useState` Hook

### 🔹 What is `useState`?

`useState` is a **React Hook** that lets you add and manage **state variables** in functional components.
Think of it as a way to make your component “remember” values between re-renders.

---

### ⚙️ Syntax

```jsx
const [state, setState] = useState(initialValue);
```

* **`state`** → current value (like a variable)
* **`setState`** → function to update the value
* **`initialValue`** → starting value of the state (e.g., 0, '', false, [] etc.)

---

### 💡 Example 1: Simple Counter App

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);  // initial value is 0

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

export default Counter;
```

🧩 **How it works:**

* When you click a button, `setCount()` updates the value.
* React re-renders the component with the new `count`.

---

### 💡 Example 2: Handling Form Input

```jsx
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Hello, {username || "Guest"}!</p>
    </>
  );
}

export default LoginForm;
```

💬 When the user types, the component updates instantly — that’s **state binding**.

---

### 🌍 Common Real-World Use Cases

| Scenario         | Example                               |
| ---------------- | ------------------------------------- |
| 🔢 Counter       | Likes, scores, steps, etc.            |
| 📄 Forms         | Login inputs, search boxes            |
| 🎨 UI Toggles    | Dark mode switch, dropdown visibility |
| 🛒 E-commerce    | Cart item count, total price          |
| 📊 Data Fetching | Loading state (`isLoading`, `error`)  |

---

### ⚠️ Notes

* Updating state **causes re-render**.
* Don’t update state directly (❌ `count++`), always use setter (✅ `setCount(count+1)`).
* You can use multiple `useState` hooks in one component.

---

### 🧭 Workflow Summary

1. Import `useState` from React.
2. Declare `[value, setValue]` pair.
3. Use `value` in JSX.
4. Call `setValue(newValue)` to update UI dynamically.

---
