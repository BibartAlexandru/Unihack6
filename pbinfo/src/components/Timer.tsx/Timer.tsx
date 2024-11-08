import React, { useEffect, useState } from "react";
import "./Timer.css";

interface Props {
  startTimeMs: number;
  allowedTimeMs: number;
}

const Timer = ({ startTimeMs, allowedTimeMs }: Props) => {
  function extendTimeout(time: number) {
    setTime(
      startTimeMs + allowedTimeMs > Date.now()
        ? startTimeMs + allowedTimeMs - Date.now()
        : 0
    );
    setTimeout(() => {
      extendTimeout(time);
    }, time);
  }

  useEffect(() => {
    setTimeout(() => {
      extendTimeout(1);
    }, 0);
  }, []);

  const [time, setTime] = useState(0);
  return (
    <div className="timer">
      <h5>{time}</h5>
    </div>
  );
};

export default Timer;
