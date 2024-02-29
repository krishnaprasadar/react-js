import React from 'react'
import { useState } from "react";



export default function Deneme(props) {
    const [textState, setTextState] = useState("On");
    const [changeColor, setChangeColor] = useState("red");

    const toggleText = () => {
        setTextState((state) => (state === "On" ? "Off" : "On"));
        setChangeColor((color) => color === "red" ? "green":"red")
    };
    
    
    
  // return (
  //   <div>
  //     <div className='row'>
  //       <div className="col-lg-1">
  //           <span className={changeColor}>{textState} {props.title}</span>
  //       </div>
  //       <div className="col-lg-6">
  //         <div className="btn btn-primary" onClick={toggleText}>
  //           Change
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}
