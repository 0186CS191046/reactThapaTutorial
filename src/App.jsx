import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import "./index.css"
import Item from "./Item";

const App = () => {
  const [item, setItem] = useState('')
  const [arr, setArr] = useState([])

  const cutIt = (index) => {
    setArr((preValue) => {
      return preValue.map((value, id) => {
        return id === index ? { ...value, isCut: true } : value;
      });
    });
  };

  const setField = (e) => {
    setItem(e.target.value)
  }

  const addData = (e) => {
    setArr((preValue) => {
      return [...preValue, { text: item, isCut: false }]
    })
    setItem("")
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <input type="text" placeholder="Add an Item" onChange={setField} value={item} />
          <Button className="btn" > <AddIcon onClick={addData} /> </Button>

          <ul>
            {arr.map((ar, index) => {
              {/* return <li>{ar}</li> */ }
              return <Item key={index} item={ar.text} cutIt={()=>cutIt(index)} line={ar.isCut} />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App