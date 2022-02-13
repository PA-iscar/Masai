import React, { useState } from "react";
import Clock from "./clock";

const Input = ({ time, maintainTime }) => {
  const [startTime, setStartTime] = useState(time);
  const [endTime, setEndTime] = useState(0);
  const maintainStartTime = (e) => {
    setStartTime(e.target.value);
    maintainTime(e.target.value ? e.target.value : 0);
  };
  const maintainEndTime = (e) => {
    setEndTime(e.target.value);
    maintainTime(startTime ? startTime : 0);
  };
  return (
    <>
      <div>
        <input
          value={startTime}
          onChange={maintainStartTime}
          type="number"
          placeholder="Start time"
        />
        <input
          value={endTime}
          onChange={maintainEndTime}
          type="number"
          placeholder="End time"
        />
      </div>
      <br />
      <Clock
        time={Number(time)}
        start={Number(startTime)}
        end={Number(endTime)}
        maintainTime={maintainTime}
      />
    </>
  );
};

export default Input;
