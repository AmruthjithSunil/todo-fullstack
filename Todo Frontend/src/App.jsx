import { useState } from "react";
import AllTodos from "./components/AllTodos";
import TodoForm from "./components/TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <AllTodos todos={todos} setTodos={setTodos} />
    </>
  );
}
