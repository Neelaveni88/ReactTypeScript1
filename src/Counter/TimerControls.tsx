import React from "react";

interface TimerControlsProps {
  start: () => void;
  pause: () => void;
  reset: () => void;
  isRunning: boolean;
}

const TimerControls: React.FC<TimerControlsProps> = ({ start, pause, reset, isRunning }) => {
  return (
    <div className="timer-controls">
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={pause} disabled={!isRunning}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerControls;