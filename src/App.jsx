import React, { useState } from "react";
import "./index.css"

const App = () => {
   const [name, setName] = useState()
   const [fullName,setFullName] = useState()

   const inputEvent = (e) => {
      setName(e.target.value)
   }

   const submitForm = ()=> {
      setFullName(name)
   }

   return (
      <>
         <div className="block">
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/>
            <button onClick={submitForm}>Click me ☺</button>
         </div>
      </>
   )
}

export default App