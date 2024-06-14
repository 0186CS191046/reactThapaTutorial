import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = 'amazon'

const FavS = ()=>{
if (favSeries === 'netflix') {
    return <Netflix/>
}
else{
    return <Amazon/>
}}

const App = () => {
    return (
        <>
            <h1 className="heading_style">List of top 5 Netflix webseries</h1>
            <div id="main">
                <FavS/>
            </div>
        </>
    )
}

export default App;