# 🎨 Using Tailwind CSS in React + Vite

### 📍 Step 1: Create Vite + React Project

Open terminal in the folder where you want to create your project and run:

```bash
npm create vite@latest my-project --template react
cd my-project
npm install
```

---

### 📦 Step 2: Install Tailwind CSS

Run these commands **inside your project directory** (`my-project`):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will create:

```
tailwind.config.js
postcss.config.js
```

---

### ⚙️ Step 3: Configure Tailwind Paths

Open `tailwind.config.js` and replace `content` with:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

---

### 🧩 Step 4: Add Tailwind Directives

In your `src/index.css` (or create it if not present), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 🪄 Step 5: Import CSS in Entry File

In `main.jsx`, make sure to import:

```jsx
import './index.css';
```

---

### 🚀 Step 6: Run the App

Start the dev server:

```bash
npm run dev
```

Now you can use Tailwind classes directly:

```jsx
<h1 className="text-3xl bg-green-400 p-3 rounded-md">
  Vite with Tailwind
</h1>
```

---

✅ **Quick Summary**

| Step | Action                         |
| ---- | ------------------------------ |
| 1    | Create Vite React app          |
| 2    | Install Tailwind & init config |
| 3    | Update `content` paths         |
| 4    | Add Tailwind directives in CSS |
| 5    | Import CSS in `main.jsx`       |
| 6    | Run `npm run dev`              |

---

