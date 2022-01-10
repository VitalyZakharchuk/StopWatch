import React from "react";
import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import BtnComponent from './Components/btn/BtnComponent';
import DisplayComponent from "./Components/display/DisplayComponent";
 
function App() {

  const [time, setTime] = useState(0);
  const [selected, setSelected] = useState("stop");
  
  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (selected === "run") {
          setTime(val => val + 1000);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [selected]);
 
  const start = () => {
    setSelected("run");
  };
 
  const stop = () => {
    setSelected("stop");
    setTime(0);
  };
 
  const reset = () => {
    setTime(0);
  };
 
  const wait =() => {
    setSelected("wait");
  };
 
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent reset={reset} stop={stop} start={start} wait={wait} />
        </div>
      </div>
    </div>
  );
}

export default App;

