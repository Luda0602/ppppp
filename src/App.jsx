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
//імпортовуємо useState  в реакт
// import { useState } from "react";
//ств компонент
// function App() {
// text - зберігає текст із поля вводу
// setText - змінює text і повідомляє React, що потрібно перемалювати компонент
//   const [text, setText] = useState("");
// tasks - масив усіх задач
// setTasks - додає, видаляє або змінює задачі
//   const [tasks, setTasks] = useState([]);
// створюємо новий масив,
// у який копіюємо всі старі задачі
// і додаємо нову задачу з text
//   function addTask() {
//     setTasks([...tasks, text]);
//після додавання поле вооду стає пустим і готовий для інший задач
//     setText("");
//   }
//повертаєм
//   return (
//     <>
//       <h1>Todo List</h1>
//поле вводу
//       <input
//тип значення що виводиться в поле текст
//         type="text"
//React може контролювати поле вводу
//         value={text}
// onChange - виконуй код кожного разу ,коли користувач щось змінює,
// event - об'єкт події
// event.target - input, у якому сталася подія
// event.target.value - текст,
// який зараз введений у цей input
//         onChange={(event) => setText(event.target.value)}
//Підказка в полі вводу
//         placeholder="Введи задачу"
//       />
//кнопка ,при кліку запускається функція яка додає задачу та пясля поле вводу стає
// порожнім для наступної задачі
//       <button onClick={addTask}>Додати</button>
//список ,поточна задача через мап проходить по кожному елементу.
//Перша ітерація
// task = "Купити молоко"
// index = 0
//       <ul>
//         {tasks.map((task, index) => (
//<li key={0}>Купити молоко</li>
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
//// експортуємо компонент App,
// щоб його можна було імпортувати в інших файлах
// export default App;
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
