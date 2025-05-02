import React, { useState } from "react";
import "./index.css"
import Header from "./Header"
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./Footer";

const App = () => {
  const [arr, setArr] = useState([])

  const addNoteList = (data) => {
    console.log("clicked",data);
    setArr((prevData) => {
      return [...prevData, data]
    })
  }

  const deleteData = (id)=> {
    setArr((prevData)=>{
    const updatedArray = prevData.filter((curr, index) => index !== id);
    return updatedArray;
    })
  }

  return (
    <>
      <Header />
      <CreateNote noteList={addNoteList} />
      {/* <Note /> */}
      {arr.map((note, index) => {
        console.log("---",note)
        return (<Note id={index} key={index} title={note.title} 
        description={note.description}
        deleteItem = {deleteData} />)
      })}
      <Footer />
    </>
  )
}

export default App