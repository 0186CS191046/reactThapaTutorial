import React from "react";
import { createRoot } from "react-dom/client";
// import youTuber ,{Myname,course,myTitle }from './App'
import add ,{sub,mul,div }from './Calc'

createRoot(document.getElementById('root')).render(
    <>
   <ul>
    <li>Sum of two no is {add(30,3)}</li>
    <li>Sub of two no is {sub(30,3)}</li>
    <li>Mul of two no is {mul(30,3)}</li>
    <li>Div of two no is {div(30,3)}</li>
   </ul>
   </>
)