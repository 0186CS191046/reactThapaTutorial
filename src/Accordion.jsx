import React, { useState } from "react";

const Accordion = (props) => {
const [data,setData] = useState(false)

    return (
        <>
            <div className="main-heading">
                <p className="plus" onClick={()=>setData(!data) }>{data ? '-' : '+'}</p>
                <h3>{props.question}</h3>
            </div>
           {data && <p className="answer">{props.answer}</p> } 
        </>
    )
}

export default Accordion;