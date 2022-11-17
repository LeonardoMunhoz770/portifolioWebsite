import React from "react";
import './style.css'
export function Button({children, onClick,width, height, href}){
    return(
        <a href={href} onClick={onClick} style={{ width: width , height: height}} className="button"> {children}</a>
    )
}

