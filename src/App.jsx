import React, { useState } from "react";
import { questions } from "./questions";
import "./index.css"
import Accordion from "./Accordion";

const App = () => {
  console.log("--", questions);

  return (
    <>
      <section className="main_div">
        <h1>React interview questions</h1>
{questions.map((element)=>{
  {/* console.log("element",element) */}
  return <Accordion question = {element.question} answer={element.answers}/>
})}
      </section>
    </>
  )
}

export default App