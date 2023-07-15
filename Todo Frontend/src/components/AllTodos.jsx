import CompletedTodos from "./CompletedTodos";
import IncompleteTodos from "./IncompleteTodos";

export default function AllTodos({ todos, setTodos }) {
  return (
    <div style={{ border: "solid" }}>
      <IncompleteTodos todos={todos} setTodos={setTodos} />
      <CompletedTodos todos={todos} setTodos={setTodos} />
    </div>
  );
}
