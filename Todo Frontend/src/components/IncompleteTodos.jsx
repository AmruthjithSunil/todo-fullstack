import Todo from "./Todo";

export default function IncompleteTodos({ todos, setTodos }) {
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  function completedTodo(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: true,
          };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <>
      <h3>Todos</h3>
      {todos
        .filter((todo) => todo.isCompleted === false)
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
            <button onClick={() => completedTodo(todo.id)}>Completed</button>
          </div>
        ))}
    </>
  );
}
