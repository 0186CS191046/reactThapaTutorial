import React from "react";
import { createRoot } from "react-dom/client";
import  './index.css'
import Cards from "./Cards";
import data from "./netflixdata.jsx";
console.log(data)

function nCard(val){
    console.log(val);
    return(
<Cards  imgsrc= {val.imgsrc}
     title={val.title}
     sname={val.sname}
     links={val.links}
     />
    )
}
createRoot(document.getElementById('root')).render(
    <>
    <h1 className="heading_style">List of top 5 Netflix webseries</h1>
    <div id="main">
     {data.map(nCard)}
</div>
    </>  
)