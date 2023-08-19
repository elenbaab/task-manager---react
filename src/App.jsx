//manage state and side effects
import { useEffect, useState } from "react"

//import components from local files
import { NewTodoForm } from "./NewToDoForm"
import { TodoList } from "./TodoList"

//import style sheet
import "./styles.css"

//defined as a default function component
export default function App() {

  //initialize a state variable ("todos") with the "setTodos" hook
  const [todos, setTodos] = useState(() => {

    //inital value of "todos" is determined by checking local storage for any existing items
    const localValue = localStorage.getItem("ITEMS")

    //if none, empty array is set as the initial state
    if (localValue == null) {
      return []
    }
    //else, parsed locsal values are used as the initial state
    else {
      return JSON.parse(localValue)
    }
  })

  //syncs "todos" state with local storage, anytime "todos" state changes "useEffect" is triggered, storing the new "todos" array in local storage as a json string
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  //adds a new todo item to the "todos" array, uses "setTodos" to update the state by adding a new object representing the todo item
  function addTodo(title) {
    setTodos(currentTodos => {
      return [ ...currentTodos, { id: crypto.randomUUID(), title, completed: false } ]
    })
  }

  //updates the "completed" status of a to-do item with a certain id, uses the "setTodos" function to map over the existing todos array and modify the specified item
  function toggle(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        else {
          return todo
        }
      })
    })
  }

  //removes a todo item from the array based on its specified id, uses "setTodos" to modify the specified item
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //returns jsx elements to render
    //renders "NewTodoForm" component which allows users to add new todo items by passing in "addTodo" as a prop
    //renders an h1 element
    //renders the "TodoList" component, passing the todos array, toggle, and deleteTodo
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <TodoList todos={todos} toggle={toggle} deleteTodo={deleteTodo} />
    </>
  )
}