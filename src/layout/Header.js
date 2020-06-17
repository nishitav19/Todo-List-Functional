import React from 'react'

function Header() {
    return (
        <div>
            <h1 style={headerStyle}>To-do List</h1>
        </div>
    )
}

const headerStyle = {
    backgroundColor: 'pink',
    textAlign: 'center'
}

export default Header