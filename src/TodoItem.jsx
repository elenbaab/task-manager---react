export function TodoItem({ completed, id, title, toggle, deleteTodo }) {
    return (
      <li>
        <label>
          <input type="checkbox" checked={completed} onChange={e => toggle(id, e.target.checked)} />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </li>
    )
}