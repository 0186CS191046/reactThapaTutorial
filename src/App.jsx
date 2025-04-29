import React, { useState } from "react";
import { questions } from "./questions";
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  console.log("--", questions);

  return (
    <>
      <h1 className="text-capitalize text-center my-3 text-primary">Welcome to my channel</h1>

      <div class="container text-center my-5">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/200/302" class="card-img-top" alt="..." height='200'/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height='200' />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height='200' />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default App