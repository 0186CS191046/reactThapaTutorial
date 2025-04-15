import React, { useState } from "react";
import Item from "./Item";
import "./index.css"

const App = () => {

   const [inputList, setInputList] = useState("")
   const [items,setItems] = useState([])

   const addData = (event) => {
      setInputList(event.target.value)
   }

   const listItems = (e)=> {
      setItems((oldItems) =>{
         return [...oldItems,inputList]
      })
      setInputList("")
   }

   const removeItems = (id)=> {
      console.log("deleted");
      setItems((item)=> {
         return item.filter((i,index)=>{
            return id!==index
         })
      })
  }

   return (
      <>
         <div className="main-div">
            <div className="center-div">
               <br />
               <h1>ToDo List</h1><br />
               <input type="text" placeholder="Add an Items" onChange={addData} value={inputList} />
               <button onClick={listItems}> + </button>
               <ol>
                  {/* <li>{items}</li> */}
                  {items.map((i,index)=> {
                     return <Item key={index} id = {index} list={i} onSelect={removeItems}/>
                     })}
               </ol>
            </div>
         </div >
      </>
   )
}

export default App