export default function TodoForm({ setTodos }) {
  function addTodo(e) {
    e.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        id: e.target[0].value + e.target[1].value,
        name: e.target[0].value,
        description: e.target[1].value,
        isCompleted: false,
      },
    ]);
  }

  return (
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Todo Name" />
      <input type="text" placeholder="Description" />
      <input type="submit" value="Add Todo" />
    </form>
  );
}
