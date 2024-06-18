import React, { useState } from "react";

const App = ()=> {
    const [count,setCount] = useState(0)
    const incrementNumber = ()=> {
        setCount(count + 1)
        console.log("clicked");
    }
    
    return (
        <>
        <h1>{count}</h1><br/>
        <button onClick={incrementNumber}>Click me</button>
        </>
    )
}

export default App;