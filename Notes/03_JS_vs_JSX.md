## 🧠 **JavaScript (JS) vs JSX — Study Notes**

### 🧩 1. **What is JavaScript (JS)?**

**JavaScript** is a **programming language** used to add interactivity, logic, and dynamic behavior to websites.

Example (plain JS):

```js
function sayHello(name) {
  return "Hello, " + name + "!";
}

console.log(sayHello("Alex"));
```

✅ JS runs directly in the browser or Node.js
✅ Uses standard syntax defined by ECMAScript
✅ No HTML tags are allowed directly inside JS code

---

### 🧩 2. **What is JSX?**

**JSX (JavaScript XML)** is a **syntax extension** for JavaScript — used **only with React**.

It allows you to **write HTML-like code inside JavaScript** files.
React then **converts** this JSX into normal JavaScript using a compiler like **Babel**.

Example (JSX in React):

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

Behind the scenes, React turns this into:

```js
function Welcome() {
  return React.createElement("h1", null, "Hello, React!");
}
```

✅ Easier to read and write
✅ Looks like HTML but is actually JavaScript
✅ Must be compiled before running in the browser

---

### 🧩 3. **Key Differences**

| Feature             | **JavaScript (JS)**                     | **JSX (JavaScript XML)**                   |
| ------------------- | --------------------------------------- | ------------------------------------------ |
| **Definition**      | Standard JavaScript language            | Syntax extension for React                 |
| **Usage**           | Used everywhere (web, backend, Node.js) | Used inside React components               |
| **Looks like**      | Pure code (no HTML)                     | Mix of HTML + JS                           |
| **Execution**       | Runs directly in browsers               | Must be transpiled (via Babel) to JS first |
| **Example**         | `document.createElement('h1')`          | `<h1>Hello</h1>`                           |
| **Purpose**         | General logic & functionality           | UI description (what to render)            |
| **File extensions** | `.js`                                   | `.jsx` (optional, but helpful for clarity) |

---

### 🧩 4. **When to Use Which**

* **Use `.js`**: For general JavaScript files (utility functions, configs, APIs, etc.)
* **Use `.jsx`**: For React components that contain JSX markup

👉 You can still use `.js` for JSX code (React will handle it),
but `.jsx` extension makes it **clearer** that the file contains JSX syntax.

---

### 🧩 5. **JS + JSX Together in React**

JSX lets you embed JS logic **inside curly braces `{}`**:

```jsx
function App() {
  const name = "Alex";
  return <h1>Hello, {name}!</h1>;
}
```

🔹 The `{name}` part is plain JS
🔹 The rest is JSX (HTML-like syntax)

---

### ✅ **In Short**

| Concept   | Meaning                                           |
| --------- | ------------------------------------------------- |
| **JS**    | The language (logic, functions, variables)        |
| **JSX**   | A React syntax that lets you write HTML inside JS |
| **Babel** | Converts JSX → plain JavaScript before running    |

---

