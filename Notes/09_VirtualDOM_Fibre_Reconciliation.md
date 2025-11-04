# 🧠 React Study Note: Virtual DOM, Fiber, and Reconciliation

For more info, see the [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture).


---

## ⚙️ 1. What is the **DOM**?

* The **DOM (Document Object Model)** is the structured tree representation of HTML elements in a webpage.
* When something changes (like a button click), the browser **updates** the DOM to reflect those changes.

🧩 **Problem:**
Updating the real DOM is **slow**, especially when there are many elements — React solves this problem using a **Virtual DOM**.

---

## 🌿 2. What is the **Virtual DOM (VDOM)?**

* It’s a **lightweight JavaScript copy** of the real DOM that React keeps in memory.
* Instead of updating the browser DOM directly, React updates the **Virtual DOM first**.

🔁 **How it works:**

1. React creates a Virtual DOM (an object representation of the UI).
2. When state or props change, React creates a **new Virtual DOM tree**.
3. React **compares** the new Virtual DOM with the old one (this process is called **Reconciliation**).
4. It finds only the changed parts (called **diffing**) and updates **only those specific parts** in the **real DOM**.

💡 **Analogy:**
Think of it like proofreading two versions of a document — React only corrects the changed sentences instead of rewriting the whole document.

---

## 🔍 3. What is **Reconciliation**?

* **Reconciliation** is the process React uses to figure out how the **Virtual DOM** should update the **Real DOM**.
* It uses a **Diffing Algorithm** to compare the previous and new virtual trees.

### ⚡ Steps:

1. Compare old Virtual DOM tree and new Virtual DOM tree.
2. If an element’s **type** and **key** are the same → keep the element and update its props.
3. If they differ → React removes the old node and creates a new one.

### 🧩 Example:

```jsx
// Before
<h1>Hello</h1>

// After
<h1>Hi</h1>
```

React notices only text changed inside the `<h1>` tag → updates text, not the entire element.

If we changed:

```jsx
<h1>Hello</h1> → <p>Hello</p>
```

React destroys `<h1>` and creates `<p>` (different element type).

---

## ⚡ 4. What is **React Fiber**?

* **Fiber** is the **new core algorithm** React introduced (React 16+) to improve reconciliation and rendering performance.

🧠 **Why Fiber?**

* Earlier, React’s reconciliation was **synchronous and blocking** — once it started updating, it couldn’t stop midway.
* Fiber allows React to **pause, resume, and prioritize** updates — making apps smoother and more responsive.

### 🚀 Key Features of Fiber:

| Feature                     | Description                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Incremental Rendering**   | React can break work into small units (called “fibers”) and do them over multiple frames instead of all at once. |
| **Prioritization**          | Important updates (like typing in input) are done first; less important ones (like animations) can wait.         |
| **Ability to Pause/Resume** | React can pause a render, work on something else, then come back later.                                          |
| **Better Error Handling**   | Introduced “Error Boundaries” — helps React recover from crashes in part of the UI.                              |

💡 **Analogy:**
Old React = one worker finishing one big task before starting another.
Fiber React = team of workers dividing the task into smaller chunks and finishing important ones first.

---

## 🧩 5. Relationship between Virtual DOM, Reconciliation, and Fiber

| Concept            | Role                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **Virtual DOM**    | Represents the UI as a JS object.                                                                   |
| **Reconciliation** | Compares old vs new Virtual DOMs and figures out the minimal DOM changes.                           |
| **Fiber**          | The underlying engine that makes this diffing and rendering faster, interruptible, and prioritized. |

🧠 You can think of it as:

> **Virtual DOM = What changes**
> **Reconciliation = How to find the changes**
> **Fiber = How to efficiently perform those changes**

---

## ⚙️ 6. Example Flow

When you call `setState()`:

1. React schedules an update in the **Fiber tree**.
2. React compares new and old **Virtual DOMs**.
3. React figures out the minimal changes via **Reconciliation**.
4. React efficiently updates only the necessary parts of the **Real DOM**.

---

## 🪶 7. Summary Table

| Term               | Definition                      | Purpose                                      |
| ------------------ | ------------------------------- | -------------------------------------------- |
| **Real DOM**       | Actual browser DOM              | Renders UI to screen                         |
| **Virtual DOM**    | JS object copy of the DOM       | Fast diffing and lightweight changes         |
| **Reconciliation** | Process to compare old/new VDOM | Finds minimal updates                        |
| **Fiber**          | Internal engine                 | Handles rendering and scheduling efficiently |

---

## 🧭 Quick Revision Points

* Virtual DOM makes UI updates faster by avoiding full DOM reloads.
* Reconciliation = process of comparing two virtual trees.
* Fiber = architecture enabling asynchronous, prioritized rendering.
* Together, they make React **fast, efficient, and smooth**.

---
