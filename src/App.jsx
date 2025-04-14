import React, { useState } from "react";
import "./index.css"

const App = () => {
   const [fullName, setFullName] = useState({
      fname: "",
      lname: "",
      email: "",
      phone:""
   })

   const inputEvent = (e) => {
      let { name, value } = e.target

      setFullName((preValue) => {
         console.log("logValue--",preValue);
         return {
            ...preValue,
            [name] : value
      }
      })
   }

   const submitForm = (event) => {
      event.preventDefault()
   }

   return (
      <>
         <form onSubmit={submitForm}>
            <div className="block">
               <h1>Hello {fullName.fname} {fullName.lname}</h1>
               <p>{fullName.email}</p>
               <p>{fullName.phone}</p>
               <input type="text" placeholder="Enter your first_name" onChange={inputEvent} name="fname" value={fullName.fname} /><br />
               <input type="text" placeholder="Enter your last_name" onChange={inputEvent} name="lname" value={fullName.lname} /><br />
               <input type="email" placeholder="Enter your email" onChange={inputEvent} name="email" value={fullName.email} /><br />
               <input type="number" placeholder="Enter your phone_number" onChange={inputEvent} name="phone" value={fullName.phone} />
               <button type="submit">Click me ☺</button>
            </div>
         </form>
      </>
   )
}

export default App