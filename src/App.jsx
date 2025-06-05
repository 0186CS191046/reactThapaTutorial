import React from "react";
import "./index.css"
import About from "./About";
import Service from "./Service" 
import Contact from "./Contact";
import Error from "./Error";
import {Routes , Route} from "react-router-dom"
import Navbar from "./Navbar";

const App = () => {
   
return (
  <>
  <Routes>
    <Route path="/" element= {<Navbar/>}/>
    <Route path="/about" element= {<About/>}/>
    <Route path="/contact" element= {<Contact/>}/>
    <Route path="/service" element= {<Service/>}/>
    <Route path="/contact/name" element={<Error/>}/>
    <Route path ="*" element={<Error/>}/>

  </Routes> 
  {/* <About/> */}
  {/* <Contact/> */}
  </>
)
}

export default App