import Todo from "./Todo";

export default function CompletedTodos({ todos, setTodos }) {
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h3>Completed</h3>
      {todos
        .filter((todo) => todo.isCompleted === true)
        .map((todo) => (
          <div key={todo.id}>
            <Todo todo={todo} />
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              delete
            </button>
          </div>
        ))}
    </>
  );
}
