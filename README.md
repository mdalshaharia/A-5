# 🧩 DevStack

**Build your ideal development stack — one technology at a time.**

DevStack is a web app that helps developers explore and compare frontend, backend, database, and tooling options side by side, then put together the stack that best fits their next project. Instead of digging through scattered docs and opinion threads, pick your technologies from curated cards and watch your personalized stack come together in real time.

## 🛠️ Built With

* **React** — component-driven UI
* **Tailwind CSS** — utility-first styling
* **DaisyUI** — Tailwind CSS component library
* **Lucide React** — icon set
* **React Toastify** — toast notifications


## ✨ Features

- **Compare technologies side by side** — Browse curated cards for frameworks, languages, and tools, each with a short description, category, difficulty level, and community rating.
- **Build a live stack** — Add technologies to your stack with one click and see it update instantly in the "Your Stack" panel — no page reloads, no forms.
- **Organized by category** — Frontend, backend, database, and tooling options are clearly labeled, making it easy to pick one technology per category and avoid decision fatigue.


## ✨ Question & Answers

1. What is JSX, and why is it used in React? 

JSX is a syntax that allows us to write HTML inside JavaScript. We use it in React because it makes the UI easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only. State is data that belongs to a component and can change over time. When the state changes, React updates the UI. For example, in my project, I used state to store the selected technologies.

3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook that allows us to create and manage state inside a component. In my project, I used it to store the technologies selected by the user. When a user adds or removes a technology, I update the state, and the UI changes automatically.

For example: const [stack, setStack] = useState([]);

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component. I need it to load the JSON data when the component first loads. This way, the data is fetched once and then stored in the state for displaying the technologies. However i didn't use it in my project instead i used 'use' hook to load data

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list. When something changes, React uses the key to understand which item was added, removed, or changed. This helps React update the UI efficiently.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In my project, I used it to show a message when the stack is empty. For example,

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackItems />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. For example:

<TechCard tech={tech} />

For sending something back, the parent can pass a function as a prop:

<TechCard  onAddToStack={addToStack} />

Then the child calls that function when the user clicks a button.