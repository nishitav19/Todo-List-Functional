import React from 'react'
import Todo from './Todo'

function Todos({ todos, markComplete, delTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
        })
    )
}

export default Todos
