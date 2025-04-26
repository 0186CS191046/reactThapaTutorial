import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Item = (props) => {

    return (
        <>
            <div><span onClick={props.cutIt}>
                <DeleteIcon />
            </span>
                <li style={{textDecoration : props.line? 'line-through':'none'}}>{props.item}</li>
            </div>
        </>
    )
}

export default Item;