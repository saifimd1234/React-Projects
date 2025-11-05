# ⚛️ React Study Note — Creating & Using Components

---

## 🧩 1. What is a Component?

* A **component** is a **reusable piece of UI** (like a function that returns JSX).
* It helps break large UIs into smaller, manageable parts.

💡 Think of a webpage as a house — each component is like a **room** with its own layout and purpose.

---

## ⚙️ 2. Types of Components

1. **Functional Components** → Most commonly used
2. **Class Components** → Older (less used now)

---

## 🪄 3. Creating a Functional Component

📁 Folder structure example:

```
src/
 ┣ components/
 ┃ ┗ Header.jsx
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css
```

### ✅ Example: `Header.jsx`

```jsx
function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 text-center">
      <h1>Welcome to My React App</h1>
    </header>
  );
}

export default Header;
```

---

## 🧠 4. Using the Component in `App.jsx`

```jsx
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h2>Home Page</h2>
        <p>This is the main content area.</p>
      </main>
    </>
  );
}

export default App;
```

---

## 🚀 5. Rendering App in `main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

---

## 🔄 6. React Component Workflow

1. `main.jsx` → Renders the **App component** to the browser.
2. `App.jsx` → Acts as the main container, imports & displays other components.
3. `Header.jsx`, `Footer.jsx`, etc. → Individual components that return JSX.
4. React updates only changed components using the **Virtual DOM**.

💡 **Flow:**
`main.jsx` ➜ `App.jsx` ➜ (imports) ➜ `Header.jsx`, `Footer.jsx`, etc.

---

## ✅ 7. Key Points to Remember

| Concept           | Explanation                                                   |
| ----------------- | ------------------------------------------------------------- |
| **File name**     | Always start with a capital letter (e.g., `Header.jsx`)       |
| **Return**        | Each component returns JSX (only **one parent element**)      |
| **Export/Import** | Use `export default` and `import ComponentName from './path'` |
| **Usage**         | Components are used like HTML tags: `<Header />`              |

---

### 💻 Example Output

When you run:

```bash
npm run dev
```

You’ll see:

```
Welcome to My React App
Home Page
This is the main content area.
```

---

### 🪶 Summary

| Step | Task                                      |
| ---- | ----------------------------------------- |
| 1    | Create a new `.jsx` file in `components/` |
| 2    | Write a function that returns JSX         |
| 3    | Export it using `export default`          |
| 4    | Import it inside `App.jsx`                |
| 5    | Use it as a custom tag (`<Header />`)     |

---
