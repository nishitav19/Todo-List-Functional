import React from 'react'
import Todo from './Todo'

function Todos({ todos, markComplete }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} markComplete={markComplete} />
        })
    )
}

export default Todos
