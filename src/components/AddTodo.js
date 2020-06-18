import React from 'react'

function AddTodo({ addTodo, nameRef }) {

    return (
        <div>
            <form style={formStyle}>
                <input ref={nameRef} style={{ width: '1200px' }} type="text" placeholder="Add Todo" />
                <button className="btn" onClick={addTodo} style={buttonStyle}>Submit</button>
            </form>
        </div>
    )
}

const formStyle = {
    paddingBottom: '20px'
}

const buttonStyle = {
    width: '140px'
}

export default AddTodo
