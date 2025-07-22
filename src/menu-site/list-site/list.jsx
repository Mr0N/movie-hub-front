import React from "react";
import "./list.css";
import Btn from  "../button-site/btn";

let List = ({items})=>{
    let array = items;
  
    return <div 
                className="container-list" >
        <ul className="ul-list">
            {array.map((a,index)=>{
                return <li  key={index}><Btn  name={a}/></li>
            })}
        </ul>        
    </div>
}
export default List;