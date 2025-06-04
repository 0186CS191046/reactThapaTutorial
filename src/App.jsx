import React from "react";
import "./index.css"
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import {Routes , Route} from "react-router-dom"

const App = () => {
   
return (
  <>
  <Routes>
    <Route path="/" element= {<About/>}/>
    <Route path="/contact" element= {<Contact/>}/>
    <Route path="/contact/name" element={<Error/>}/>
  </Routes>
  {/* <About/> */}
  {/* <Contact/> */}
  </>
)
}

export default App