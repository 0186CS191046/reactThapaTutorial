import React from "react";
import Cards from "./Cards";
import data from "./netflixdata";

const Amazon = ()=>{
    return (
        <Cards
        key={data[3].id}
        imgsrc={data[3].imgsrc}
        title={data[3].title}
        sname={data[3].sname}
        links={data[3].links}
    />
    )
}

export default Amazon;