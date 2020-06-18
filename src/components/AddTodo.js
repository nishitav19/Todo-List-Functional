import React from 'react'
import { Spring } from 'react-spring/renderprops'

function AddTodo({ addTodo, nameRef }) {

    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 800, duration: 800 }}
        >
            {props => (
                <div style={props}>
                    <div>
                        <form style={formStyle}>
                            <input ref={nameRef} style={{ width: '1200px' }} type="text" placeholder="Add Todo" />
                            <button className="btn" onClick={addTodo} style={buttonStyle}>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const formStyle = {
    paddingBottom: '20px'
}

const buttonStyle = {
    width: '140px'
}

export default AddTodo
