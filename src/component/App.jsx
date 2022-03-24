import React, { useState } from "react";
import "./App.css";
import Box from  "./Box";

function App(){
  const [totalBoxOn, setBoxStatus] = useState(0);
  const countBoxHandler = (boxStatus) => {
    setBoxStatus(countBoxOn => countBoxOn + boxStatus);
  };
  
  return (
    <div className="App">
      <h1> Count: {totalBoxOn}</h1>
      <div className="Card">
        <Box onBoxData={countBoxHandler}/>
        <Box onBoxData={countBoxHandler}/>
        <Box onBoxData={countBoxHandler}/> 
        <Box onBoxData={countBoxHandler}/>   
      </div>
    </div>
  );
}

export default App;
