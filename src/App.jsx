import React, { useState } from 'react'

const App = ()=> {
    let purple = 'purple'
    const [bg, setBg] = useState(purple)
    const [name, setName] = useState('Click me')
    const bgChange = ()=> {
        console.log("clicked");
        let colorchange = "grey"
        setBg(colorchange)
        setName("Ouch : 😮")
    }
    const bgDoubleChange = ()=> {
        console.log("double clicked");
        setBg(purple)
        setName("Ayyo : 😡")
    }
    return (
    <>
    <div style={{backgroundColor:bg}}>
        {/* <button onClick={bgChange} onDoubleClick={bgDoubleChange}> {name} </button> */}
        <button onMouseEnter={bgChange} onMouseLeavebg={bgDoubleChange}> {name} </button>
    </div>
    </>)
}

export default App;