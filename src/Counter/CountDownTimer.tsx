import React, { useState, useEffect } from "react";
import "./style.css";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";


const CountdownTimer: React.FC = () => {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
  
    useEffect(() => {
      let timer: number;
      if (isRunning && (minutes > 0 || seconds > 0)) {
        timer = window.setInterval(() => {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else if (minutes > 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }, 1000);
      } else if (minutes === 0 && seconds === 0 && isRunning) {
        setIsRunning(false);
        alert("Time is up!");
      }
      return () => clearInterval(timer);
    }, [minutes, seconds, isRunning]);
  
    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
      setIsRunning(false);
      setMinutes(0);
      setSeconds(0);
    };
  
    return (
      <div className="countdown-timer">
        <div className="inputField">
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Math.max(0, parseInt(e.target.value) || 0))}
            placeholder="Minutes"
          />
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
            placeholder="Seconds"
          />
        </div>
        <TimerDisplay minutes={minutes} seconds={seconds} />
        <TimerControls start={startTimer} pause={pauseTimer} reset={resetTimer} isRunning={isRunning} />
      </div>
    );
  };
  
  export default CountdownTimer;
  