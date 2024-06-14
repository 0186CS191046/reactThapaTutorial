import React from "react";
import data from "./netflixdata";
import Cards from "./Cards";

const Netflix = ()=>{
    return (
        <Cards
        key={data[1].id}
        imgsrc={data[1].imgsrc}
        title={data[1].title}
        sname={data[1].sname}
        links={data[1].links}
    />
    )
}

export default Netflix;