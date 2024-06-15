import React from "react";

const SlotM = (props)=> {
    // let x = '😃'
    // let y = '😃'
    // let z = '😃'

    if (props.x===props.y && props.y === props.z){
        return (
            <>
            <div className="card_inner">
            <h1>{props.x} {props.y} {props.z}</h1>
            <h1>This is matching</h1>
            </div>
            <hr />
        
        </>
        )
    }
    else{
        return (
            <>
            <div className="card_inner">
        <h1>{props.x} {props.y} {props.z}</h1>
        <h1>This is not matching</h1>
        <hr />
        </div>
        </>
        )
    }
}

export default SlotM;