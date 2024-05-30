import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'

let currDate = new Date(2024,5,29,24)
currDate = currDate.getHours()
let cssStyle = {}
let greeting = ''

if (currDate>=1 && currDate <12){
greeting = "Good Morning"
cssStyle.color = 'green'
}else if(currDate >=12 && currDate< 19){
    greeting = "Good Afternoon"
    cssStyle.color = 'orange'
}else{
    greeting = "Good Night"
    cssStyle.color = 'black'
}

createRoot(document.getElementById('root')).render(
 <>
 <div>
 <h1 class = "heading" >Hello sir, <span style={cssStyle}>{greeting}</span></h1>
 </div>
 </>
)