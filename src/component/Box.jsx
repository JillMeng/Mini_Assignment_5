import React, { useState } from "react";
import "./Box.css";


export default function Box(props) {
    
    const [boxOn, setBoxStatus] = useState(-1);

    let className = "box";
    if(boxOn === 1) {
        className += " " + 'black';
    } else if (boxOn === -1) {
        className += " " + 'white';
    }
    
    const clickHandler = () => {
        const isboxOn = boxOn * -1;
        setBoxStatus(isboxOn);
        props.onBoxData(isboxOn);
    };
  
    return (
    <div className={className} onClick={clickHandler}>
    </div>

    );

}