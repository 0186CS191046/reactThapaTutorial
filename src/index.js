import React from "react";
import { createRoot } from "react-dom/client";
import youTuber ,{Myname,course,myTitle }from './App'

createRoot(document.getElementById('root')).render(
    <ol>
        <li>Kajal</li>
        <li>{youTuber}</li>
        <li>{course}</li>
        <li>{Myname()}</li>
        <li>{myTitle()}</li>
    </ol>
)