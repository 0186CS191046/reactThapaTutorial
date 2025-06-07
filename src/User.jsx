import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const User = ()=>{
    const {fname, lname} = useParams()
    const location = useLocation()
    console.log(":location",location);
    
    return(
        <>
        <Navbar/>
        <h1>This is user page {fname} {lname}</h1>
        <p>This is my location {location.pathname}</p>
        {location.pathname === `/user/kajal/kumari`?
        (<button onClick={()=>alert("you are good")}>Click me</button>) : null}
        </>
    )
}

export default User;