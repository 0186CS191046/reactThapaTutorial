import React from "react";
import Navbar from "./Navbar";

const About = (props)=> {
    return (
        <>
        <Navbar/>
            <h1>This is {props.name} page</h1>
        </>
    )
}

export default About;