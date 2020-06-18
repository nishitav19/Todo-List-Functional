import React from 'react'
import { Spring } from 'react-spring/renderprops'

function Header() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -50 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay: 400 }}
        >
            {props => (
                <div style={props}>
                    <div>
                        <h1 style={headerStyle}>To-do List</h1>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const headerStyle = {
    backgroundColor: 'rgb(235, 113, 128)',
    padding: '10px 0 10px 0',
    textAlign: 'center',
    color: 'white',
    fontSize: '30px',
    fontFamily: 'Roboto, sans-serif'
}

export default Header