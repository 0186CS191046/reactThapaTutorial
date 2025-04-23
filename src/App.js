import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const App = ()=>{
  const [count,setCount] = useState(0)

  const increaseNumber = ()=> {
    console.log("added");
    setCount(count+1)
  }

  const decreaseNumber = ()=> {
    console.log("subtract");
    setCount(count-1)
    if(count===0){
      alert("You are set to 0")
      setCount(0)
    }
  }

  return(
    <>
      <div className="main_div">
        <div className="center_div">
        <br/>
        <h1>{count}</h1>

        <div className="btn-container">
        
        <Tooltip title="Add" ><Button onClick = {increaseNumber} id="btn1"><AddIcon/></Button></Tooltip>
        <Tooltip title="Minus"><Button onClick = {decreaseNumber} id="btn2"><RemoveIcon/></Button></Tooltip>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
