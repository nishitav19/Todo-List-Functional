import React from 'react'
import { Spring } from 'react-spring/renderprops'

function Todo({ todo, markComplete, delTodo }) {
    const handleToggle = () => {
        markComplete(todo.id)
    }

    const handleDelete = () => {
        delTodo(todo.id)
    }

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1200, duration: 1200 }}
        >
            {props => (
                <div style={props}>
                    <div style={{
                        background: '#f4f4f4',
                        padding: '10px 0 10px 0',
                        border: '1px dotted black',
                        fontFamily: 'Roboto, sans-serif',
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}>
                        <input type="checkbox" onClick={handleToggle} /> {todo.name}
                        <i onClick={handleDelete}
                            className="fa fa-trash"
                            aria-hidden="true"
                            style={iconStyle}>
                        </i>
                    </div>
                </div>
            )}
        </Spring>

    )
}

const iconStyle = {
    float: 'right',
    fontSize: '22px',
    cursor: 'pointer',
    paddingRight: '10px'
}

export default Todo
