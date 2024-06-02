import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'

function App() {
    let greeting = ''
    let cssStyle = {}
    let currDate = new Date(2024, 6, 2, 12)
    let currGreeting = currDate.getHours()
    if (currGreeting >= 1 && currGreeting < 12) {
        greeting = "Good Morning"
        cssStyle.color = 'red'
    }
    else if (currGreeting <= 12 && currGreeting < 19) {
        greeting = 'Good Afternoon'
        cssStyle.color = 'orange'
    } else {
        greeting = 'Good Night'
        cssStyle.color = 'black'
    }

    createRoot(document.getElementById('root')).render(
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    )
}

export default App;