import React, { useState, useRef } from 'react'
import Header from './layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Walk the dog', completed: false },
    { id: uuidv4(), name: 'Finish the assignment', completed: false }
  ])

  const nameRef = useRef()

  const addTodo = e => {
    const name = nameRef.current.value
    if (name === '') return
    e.preventDefault()
    setTodos(todos => {
      return [...todos, { id: uuidv4(), name: name, completed: false }]
    })
    nameRef.current.value = null

  }

  const markComplete = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <div>
      <Header />
      <AddTodo nameRef={nameRef} addTodo={addTodo} />
      <Todos todos={todos} markComplete={markComplete} />
    </div>
  )
}

export default App
