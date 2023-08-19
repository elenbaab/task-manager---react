import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggle, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No To-Do's"}
      {todos.map(todo => {
        return (
          <TodoItem {...todo} key={todo.id} toggle={toggle} deleteTodo={deleteTodo} />
        )
      })}
    </ul>
  )
}