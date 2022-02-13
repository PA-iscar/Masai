import React, { useState } from "react";
import Input from "./input";

const Timer = () => {
  const [time, setTime] = useState(0);
  const maintainTime = (val) => {
    setTime(val);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>{time}</h2>
      <Input time={time} maintainTime={maintainTime} />
    </div>
  );
};

export default Timer;
