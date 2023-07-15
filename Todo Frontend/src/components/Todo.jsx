export default function Todo({ todo }) {
  return <>{todo.name + "-" + todo.description}</>;
}
