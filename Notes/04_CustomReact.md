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
