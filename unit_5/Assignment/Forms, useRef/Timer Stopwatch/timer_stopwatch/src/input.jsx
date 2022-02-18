import React, { useState, useEffect } from "react";
import Styles from "./app.module.css";

const Input = ({ setNewTime, setGetInput, time }) => {
  const [hours, setHours] = useState(() => Math.floor(time / 3600));
  const [minutes, setMinutes] = useState(() => Math.floor((time % 3600) / 60));
  const [seconds, setSeconds] = useState(() => Math.floor((time % 3600) % 60));

  useEffect(() => {
    setNewTime(Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds));
  }, [hours, minutes, seconds, setNewTime]);

  const handleChange = (e) => {
    if (e.target.id === "hours") {
      if (
        e.target.value >= 0 &&
        e.target.value < 24 &&
        e.target.value.length <= 2
      ) {
        setHours(e.target.value);
      }
    } else if (e.target.id === "minutes") {
      if (
        e.target.value >= 0 &&
        e.target.value < 60 &&
        e.target.value.length <= 2
      )
        setMinutes(e.target.value);
    } else if (e.target.id === "seconds") {
      if (
        e.target.value >= 0 &&
        e.target.value < 60 &&
        e.target.value.length <= 2
      )
        setSeconds(e.target.value);
    }
  };
  return (
    <div className={Styles.inputs}>
      <input
        className={Styles.input}
        value={hours}
        type="text"
        id="hours"
        onChange={handleChange}
      />
      h
      <input
        className={Styles.input}
        value={minutes}
        type="text"
        id="minutes"
        onChange={handleChange}
      />
      m
      <input
        className={Styles.input}
        value={seconds}
        type="text"
        id="seconds"
        onChange={handleChange}
      />
      s
    </div>
  );
};

export default Input;
