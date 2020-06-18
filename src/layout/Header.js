import React from 'react'

function Header() {
    return (
        <div>
            <h1 style={headerStyle}>To-do List</h1>
        </div>
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