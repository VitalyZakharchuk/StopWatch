import React from 'react';
import  './BtnComponent.css';

const BtnComponent = ({stop,reset,start,wait}) => {
  return (
    <div>
      
        <button  onClick={start}>Start</button> 
        <button  onClick={stop}>Stop</button>
        <button  onClick={wait}>Wait</button>
        <button  onClick={reset}>Reset</button>
         
      
     
    </div>
  );
}

export default BtnComponent;