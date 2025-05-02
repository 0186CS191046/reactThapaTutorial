import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {

    const deleteData=()=> {
        props.deleteItem(props.id)
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <DeleteOutlineIcon className="deleteBtn" onClick={deleteData}/>
            </div>

        </>
    )
}

export default Note;