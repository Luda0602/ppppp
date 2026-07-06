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
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount(0)}>Скинути</button>
    </>
  );
}
export default App;

/////////////////////////////////////Todo List.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
