import React from "react";
import { useLocation, useParams ,useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const User = ()=>{
    const {fname, lname} = useParams()
    const location = useLocation()
    const history = useNavigate()
    
    return(
        <>
        <Navbar/>
        <h1>This is user page {fname} {lname}</h1>
        <p>This is my location {location.pathname}</p>
        {location.pathname === `/user/kajal/kumari`?
        (<button onClick={()=>history("/user/kajal/kumari")}>Click me</button>) : null}
        </>
    )
}

export default User;