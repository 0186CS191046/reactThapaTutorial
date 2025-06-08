import React, { useState } from "react";
import Navbar from "./Navbar";
import Sresult from "./Sresult";

const Search = () => {
    const [img, setImg] = useState("")

    const inputEvent = (e) => {  
        setImg(e.target.value)
        console.log("img0--",img);
        
    }

    return (
        <>
            <Navbar />
            <div className="search">
                <input type="text" placeholder="search anything" onChange={inputEvent} 
                    value={img}
                />
            </div>
            <Sresult name={img}/>

        </>
    )
}

export default Search;