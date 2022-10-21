import React from "react";
import './style.css'
export function Button({children, onClick,width, height}){
    return(
        <button onClick={onClick} style={{ width: width , height: height}} className="button"> {children}</button>
    )
}

