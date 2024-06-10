import React from "react";
import { createRoot } from "react-dom/client";
import  './index.css'
import Cards from "./Cards";
import data from "./netflixdata.jsx";
console.log(data)
createRoot(document.getElementById('root')).render(
    <>
    <div id="main">
    <Cards  imgsrc= {data[0].imgsrc}
     title={data[0].title}
     sname={data[0].sname}
     links={data[0].links}
     />
    <Cards  sname=  {data[1].sname}
        imgsrc= {data[1].imgsrc}
        title={data[1].title}
        links={data[1].links}
        />
    <Cards sname = {data[2].sname}
        imgsrc = {data[2].imgsrc}
        title={data[2].title}
        links={data[2].links}/>

<Cards sname = {data[3].sname}
        imgsrc = {data[3].imgsrc}
        title={data[3].title}
        links={data[3].links}/>

<Cards sname = {data[4].sname}
        imgsrc = {data[4].imgsrc}
        title={data[4].title}
        links={data[4].links}/>
        </div>
    </>  
)