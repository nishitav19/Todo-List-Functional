import React from 'react'

function Todo({ todo, markComplete }) {
    const handleToggle = () => {
        markComplete(todo.id)
    }

    return (
        <div style={{
            paddingTop: '15px',
            border: '1px dotted black',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
            <input type="checkbox" onClick={handleToggle} /> {todo.name}
        </div>
    )
}

export default Todo
