import React from "react";

const Item = (props)=> {

    return(
        <>
            <div className="list-item">
            <span onClick={()=> {props.onSelect(props.id)}}>&#10006;</span>
            <li>{props.list}</li>
            </div>
        </>
      
    )
}

export default Item;