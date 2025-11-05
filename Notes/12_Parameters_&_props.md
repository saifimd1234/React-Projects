# ⚛️ React Study Note — Props in React

---

## 💡 1. What are Props?

* **Props (short for Properties)** are used to **pass data** from one component to another (usually from parent → child).
* Think of props like **function parameters** — they help make components **reusable and dynamic**.

🧩 **Analogy:**
A function like `greet(name)` takes data as a parameter.
Similarly, a React component can take props:

```jsx
<Greet username="Saifi" />
```

---

## ⚙️ 2. Passing and Using Props

### Example: `App.jsx`

```jsx
import Card from './components/Card'

function App() {
  return (
    <>
      <Card username="Mohammad Saifi" role="Data Analyst" />
      <Card username="Ayesha Khan" role="Frontend Developer" />
    </>
  )
}

export default App
```

### Example: `Card.jsx`

```jsx
function Card(props) {
  return (
    <div className="p-4 m-2 bg-gray-200 rounded-lg">
      <h2>{props.username}</h2>
      <p>{props.role}</p>
    </div>
  )
}

export default Card
```

🧠 **Explanation:**

* `props` is an object that holds all the data passed from the parent.
* So `props.username` means “get the `username` property from props”.

---

## 🪄 3. Destructuring Props

To make code cleaner:

```jsx
function Card({ username, role }) {
  return (
    <div className="p-4 m-2 bg-gray-200 rounded-lg">
      <h2>{username}</h2>
      <p>{role}</p>
    </div>
  )
}
```

Now you can directly use `username` instead of `props.username`.

🧩 **Rule of Thumb:**

* Use `props.username` → when you’re passing props around or not destructuring yet.
* Use `{ username }` → when you want cleaner, more readable JSX.

---

## ⚙️ 4. Default Props

If no props are passed, you can set **default values**.

### Option 1: Default Props (older way)

```jsx
Card.defaultProps = {
  username: "Guest User",
  role: "Visitor"
}
```

### Option 2: Default Values During Destructuring

```jsx
function Card({ username = "Guest User", role = "Visitor" }) {
  return (
    <div className="p-4 m-2 bg-gray-200 rounded-lg">
      <h2>{username}</h2>
      <p>{role}</p>
    </div>
  )
}
```

💡 **Tip:** Default props make your UI stable even when some data is missing.

---

## 🔧 5. Scalable Component Design (Example: Card Component)

In real-world projects, a **scalable card component** should:

1. Accept props for **all variable content** (image, title, description, link, etc.).
2. Use **default values** for optional props.
3. Use **props.children** for flexible layouts.

### Example: Scalable Card

```jsx
function Card({ username = "Guest", role = "User", children }) {
  return (
    <div className="p-4 m-2 bg-white shadow-md rounded-lg hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{username}</h2>
      <p className="text-gray-600">{role}</p>
      {children}
    </div>
  )
}

export default Card
```

### Using It:

```jsx
<Card username="Saifi" role="Analyst">
  <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">View Profile</button>
</Card>

<Card>
  <p>This card uses default values.</p>
</Card>
```

---

## 🔄 6. Props Workflow Summary

1. Parent component sends data using attributes:

   ```jsx
   <Card username="John" role="Engineer" />
   ```
2. Child component receives them as an object:

   ```jsx
   function Card(props) { console.log(props) }
   ```
3. Access data using `props.username` or destructuring.
4. Optional: Provide default values to avoid undefined errors.

---

## ✅ 7. Quick Revision Table

| Concept                 | Description                               | Example                      |
| ----------------------- | ----------------------------------------- | ---------------------------- |
| **props**               | Object containing data sent from parent   | `props.username`             |
| **Destructuring**       | Shortcut to extract values                | `{ username }`               |
| **Default Props**       | Set fallback values                       | `username = "Guest"`         |
| **Reusable Components** | Accept props to display different content | `<Card username="Ayesha" />` |

---

## 🧠 Summary

* Props = data passed between components.
* Always **start component names with uppercase**.
* Destructure props for cleaner syntax.
* Use **default props** to handle missing values.
* Build **scalable components** using `props.children` and configurable props.

---
