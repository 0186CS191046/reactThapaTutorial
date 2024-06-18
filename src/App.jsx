import React, { useState } from "react";

const App = ()=> {
    let date = new Date().toLocaleTimeString()

    const [currentdate, updatedDate] = useState(date)
    const currentDate = ()=> {
        let newdate = new Date().toLocaleTimeString()
        updatedDate(newdate)
        console.log("clicked");
    }
    
    return (
        <>
        <h1>{currentdate}</h1><br/>
        <button onClick={currentDate}>get Time</button>
        </>
    )
}

export default App;