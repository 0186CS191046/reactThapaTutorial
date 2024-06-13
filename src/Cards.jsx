import React from "react"
import Heading from "./Heading";

function Cards(props){
    return(
    <>
    <div className="cards">
        <div className="card">
            <img className="card__img" src={props.imgsrc} alt="myImage" />
            <div className="card__info">
                <span className="card__category">{props.title}</span>
               <Heading sname = {props.sname}/>
                <a href={props.links} target="blank" className="button">
                    <button className="text">Watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}

export default Cards;