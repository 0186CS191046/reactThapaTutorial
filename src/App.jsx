import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = 'netflix'

const App = () => {
    return (
        <>
            <h1 className="heading_style">List of top 5 Netflix webseries</h1>
            <div id="main">
               {(favSeries == 'netflix')?<Netflix/>:<Amazon/>}
            </div>
        </>
    )
}

export default App;