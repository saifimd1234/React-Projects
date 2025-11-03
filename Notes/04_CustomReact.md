### 🧠 What is “Custom React”?

**Custom React** here means you are **manually recreating how React renders elements to the DOM** — i.e., how `React.createElement()` and `ReactDOM.render()` work internally.

You are **not using the React library**, but **building your own tiny version** to understand the concept.

---

### 🗂️ Directory structure

```
CustomReact/
│
├── index.html
└── customreact.js
```

* **index.html** → the web page that loads your script
* **customreact.js** → your own code that simulates React’s behavior

---

### ⚙️ What the code does

You’re creating a function `customRender()` that:

1. Takes a **virtual element** (an object like React’s virtual DOM element)
2. Creates a real **HTML DOM element**
3. Sets its **attributes (props)** and **children**
4. **Appends it to the container**

---

### 💻 Code explained

```js
function customRender(reactElement, container) {
  // 1️⃣ Create a real DOM element
  const domElement = document.createElement(reactElement.type);

  // 2️⃣ Set inner content
  domElement.innerHTML = reactElement.children;

  // 3️⃣ Assign all props (like href, target)
  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // 4️⃣ Attach to the container (like ReactDOM.render)
  container.appendChild(domElement);
}

// Simulating React.createElement()
const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
};

// Root container (like <div id="root"> in index.html)
const mainContainer = document.querySelector('#root');

// Render our element
customRender(reactElement, mainContainer);
```

---

### 🧩 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom React</title>
</head>
<body style="background-color: #414141">
  <div id="root"></div>
  <script src="./customreact.js"></script>
</body>
</html>
```

---

### 🧱 What is it trying to explain?

This demonstrates **React’s core concept:**

* React doesn’t directly work with the real DOM.
* It creates **virtual elements (objects)** and then **renders** them into the DOM — exactly what your `customRender()` does.

---

### 💡 Where it’s used

Used for **learning** and **understanding how React works internally** — especially concepts like:

* Virtual DOM
* Rendering elements
* Props and children handling

---

✅ **In short:**
You are building your own *mini React engine* to understand **how `ReactDOM.render()` and virtual DOMs convert JS objects into real HTML elements.**

Excellent question — and you’ve caught one of the *most confusing but important* details for beginners in React. 👇

---

### 💡 Problem:

In your code:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
    AnotherElement
  </>
)
```

👉 `AnotherElement` **will not render**.
Instead, React will treat it as a plain **JavaScript variable name (string)**, not as JSX content — so nothing appears.

---

### 🧠 Why?

In JSX:

* Anything **inside `{}`** is **evaluated as JavaScript**.
* Anything **without `{}`** is treated as **JSX or text**.

So, when you wrote `AnotherElement`, React didn’t know you meant the variable — it treated it like plain text.

---

### ✅ Fix:

You need to **wrap the variable inside curly braces `{}`** so React knows to render that element:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
    {AnotherElement}   {/* ✅ Correct way */}
  </>
)
```

---

### 📘 Explanation:

* `AnotherElement` is a **JSX element stored in a variable**.
* `{AnotherElement}` tells React:
  “Hey, insert the JSX element stored in this variable here.”

---

### 🧩 Full Working Code:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom function and react app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
    {AnotherElement}  {/* ✅ Works now */}
  </>
)
```

---

### 🧩 Summary for your notes:

| Issue                          | Reason                      | Fix                             |
| ------------------------------ | --------------------------- | ------------------------------- |
| `AnotherElement` not rendering | JSX treats it as plain text | Wrap it with `{AnotherElement}` |
| ✅ Working syntax               | `{AnotherElement}`          |                                 |

---

So, the tutorial’s example likely had `{AnotherElement}` — or the instructor implicitly mentioned that JSX variables must always be wrapped inside `{}` to be rendered.
