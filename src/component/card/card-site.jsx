import React, { useState } from "react";
import "./card-site.css";
import preview from "../../assets/preview.svg";

let Card = ({ backgroundImg }) => {
    let [objShow, setShow] = useState(false);
    let [objViewTrailer,setViewTrailer] = useState(false);
    return <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="card-container" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <div className="card-header">1</div>
        <div  className="card-trailer" onMouseLeave={()=>setViewTrailer(false)} >
            <div class={objViewTrailer? "card-opacity" :""} onMouseEnter={()=>setViewTrailer(true)} className="card-header-icon-trailer">
                <img className="card-icon-trailer" src={preview}></img>
            </div>
            <div class={objViewTrailer? "card-opacity" :"card-hide"}>
                <p  style={{textTransform:"upper",
                            color:"white"}} >Смотреть трейлер</p>
            </div>
        </div>
        <div className="card-icon">
            <img className={`card-icon-img ${!objShow ? "card-hide" : ""}`} src={preview}></img>
        </div>
        <div className="card-footer">4</div>
    </div>
}
export default Card;