import React from "react";
import "./index.css"
import About from "./About";
import Service from "./Service" 
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";
import {Routes , Route} from "react-router-dom"
import Navbar from "./Navbar";
import Search from "./Search";

const App = () => {
   
return (
  <>
  <Routes>
    <Route path="/" element= {<Navbar />}/>
    <Route path="/about" element= {<About name="about"/>}/>
    <Route path="/contact" element= {<Contact/>}/>
    <Route path="/user" element= {<User/>}/>
    <Route path="/search" element = {<Search/>}/>
    <Route path="/user/:fname/:lname?" element={<User/>}/>
    <Route path ="*" element={<Error/>}/>

  </Routes> 
  {/* <About/> */}
  {/* <Contact/> */}
  </>
)
}

export default App