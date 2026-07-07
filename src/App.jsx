// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>+</button>
//     </>
//   );
// }

// export default App;
// setCount //Змінює значення count.//Каже React: "Перемалюй компонент."
// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
//       <button onClick={() => setCount(0)}>Скинути</button>
//     </>
//   );
// }
// export default App;

/////////////////////////////////////Todo List.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   return (
//     <>
//       <h1>Todo List</h1>

//       <input
//         type="text"
//         value={text}
//         onChange={(event) => setText(event.target.value)}
//         placeholder="Введи задачу"
//       />

//       <p>Ти ввела: {text}</p>
//     </>
//   );
// }

// export default App;
//Крок 1 — input + state
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks([...tasks, text]);
    setText("");
  }

  return (
    <>
      <h1>Todo List</h1>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Введи задачу"
      />

      <button onClick={addTask}>Додати</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
