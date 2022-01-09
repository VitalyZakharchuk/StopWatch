import React, {useState} from 'react';
import DisplayComponent from './Components/display/DisplayComponent';
import BtnComponent from './Components/btn/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  
  const start = () => {
    run();
    setInterv(setInterval(run, 1000));
  };

  let updatedS = time.s, 
      updatedM = time.m, 
      updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    
    updatedS++;
    return setTime({ s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setTime({ s:0, m:0, h:0})
    
  };

  const wait = () => {
    clearInterval(interv);
    
    
  };

  const reset = () =>{
    clearInterval(interv);
    setTime({ s:0, m:0, h:0});
  }
 
  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <BtnComponent   reset={reset} stop={stop} start={start} wait={wait}/>
          </div>
     </div>
    </div>
  );
}

export default App;
