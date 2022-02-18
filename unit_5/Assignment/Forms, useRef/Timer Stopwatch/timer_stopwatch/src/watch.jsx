import React, { useState, useEffect } from "react";
import Styles from "./app.module.css";
import Clock from "./clock";
import Input from "./input";

const Watch = ({ value, time, setTime, isStarted, setIsStarted }) => {
  const [getInput, setGetInput] = useState(false);
  const [newTime, setNewTime] = useState(0);

  useEffect(() => {
    if (newTime) {
      setTime(Number(newTime));
    }
  }, [newTime, setTime]);

  const editTime = (e) => {
    if (value === "stopwatch") {
      setIsStarted((prev) => !prev);
    }
    if (value === "timer") {
      setIsStarted(false);
      setGetInput(true);
    }
  };
  return (
    <div className={`${Styles.watch}`} onClick={editTime}>
      {isStarted ? (
        <Clock time={time} value={value} />
      ) : getInput ? (
        <Input
          setNewTime={setNewTime}
          isStarted={isStarted}
          setGetInput={setGetInput}
          time={time}
        />
      ) : (
        <Clock time={time} value={value} />
      )}
    </div>
  );
};

export default Watch;
