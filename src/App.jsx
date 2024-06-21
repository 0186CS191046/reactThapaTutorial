import React, { useState } from "react";

const App = ()=> {
    const [name, setname] = useState()
    const [fullname, setFullname] = useState()
    const textChange = (event)=> {
        setname(event.target.value)
    }
    const submitText = ()=> {
        setFullname(name)

    }
    return(
        <>
        <div className="container">
            <h1>Hello {fullname}</h1>
            <input type="text" placeholder="Enter Your Name" defaultValue ="" value={name} onChange={textChange}/>
            <button onClick={submitText}>Submit 👍</button>
        </div>
        </>
    )
}

export default App;