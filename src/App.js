import React from "react";
import data from "./netflixdata";
import Cards from './Cards'

const App = () => {
    return (
        <>
        <h1 className="heading_style">List of top 5 Netflix webseries</h1>
            <div id="main">
                {data.map((val, index) => {
                    return(
                    <Cards
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        links={val.links}
                    />)
                })}
            </div>
        </>
    )
}

export default App;