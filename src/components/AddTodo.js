import React from 'react'

function AddTodo({ addTodo, nameRef }) {

    return (
        <div>
            <form style={formStyle}>
                <input ref={nameRef} style={{ width: '1200px' }} type="text" placeholder="Add Todo" />
                <button onClick={addTodo} style={{ width: '140px' }}>Add</button>
            </form>
        </div>
    )
}

const formStyle = {
    paddingBottom: '20px'
}

export default AddTodo
