import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  let [count, setCount] = useState(0);

  let timeRef = useRef(null);

  let handleStart = () => {
    timeRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  let handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  let handleReset = () => {
    handleStop();
    handleStart(0);
  };

  return (
    <div>
      <h3>Timer : {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
