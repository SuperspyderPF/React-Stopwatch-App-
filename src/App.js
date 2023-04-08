import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, '0');
    const milliseconds = Math.floor(time % 1000)
      .toString()
      .padStart(3, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="app">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <div className="stopwatch-time">{formatTime(time)}</div>
        {!isRunning && (
          <button className="btn btn-start" onClick={handleStart}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="btn btn-stop" onClick={handleStop}>
            Stop
          </button>
        )}
        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
