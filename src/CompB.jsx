import React ,{useContext} from "react";
import CompC from "./CompC"
import {Fname,Lname} from "./App"

const CompB = ()=> {
    const fname = useContext(Fname)
    const lname = useContext(Lname)
    return(
    <>
        {/* <CompC/> */}
        <h1>Hello {fname} {lname} </h1>
    </>)
}

export default CompB