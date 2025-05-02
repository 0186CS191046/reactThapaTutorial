import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const CreateNote = (props) => {
    const [data, setData] = useState({
        title:"",
        description:""
    })

    const createNote = (e)=> {
        const {name,value} = e.target
        setData((prevData)=>{
            return({...prevData,[name]:value})
        })
    }

    const addEvent = () => {
        console.log("datadat--",data);
        props.noteList(data)
        setData({title:"",description:""})
    }

    return (
        <>
            <div className="main-heading">
                <form>
                    <input type="text" value = {data.title} placeholder="Title" onChange={createNote} autoComplete="off" name="title" />
                    <textarea rows="" value = {data.description} columns="" placeholder="Write a note ..." name = "description" onChange={createNote} />
                </form>
                <Button className="add-btn" ><AddIcon className="btn" onClick={addEvent} /></Button>
            </div>

        </>
    )
}

export default CreateNote;