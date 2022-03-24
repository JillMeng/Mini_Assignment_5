import React from "react";
import "./Box.css";


export default function Box(boxOn) {
    
    let className = "box";
    if(boxOn === 1) {
        className += " " + 'black';
    } else if (boxOn === -1) {
        className += " " + 'white';
    }

    return (
        <div className={className} onClick={boxOn}>
        </div>
        );

}
