import React from "react";
import { Fname, Lname } from "./App";

const CompC = () => {
    return (<>
        <Fname.Consumer>{(fname) => {
           return <Lname.Consumer>
                {(lname) => {
                    return <h1>Hello {fname} {lname}</h1>
                }}
            </Lname.Consumer>

        }}
        </Fname.Consumer>

    </>)
}

export default CompC;