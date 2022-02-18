import React, { useState, useEffect } from "react";
import Styles from "./app.module.css";

const Clock = ({ time, value }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  useEffect(() => {
    let newTime = time;
    if (value === "stopwatch") {
      setHours(() => {
        let val = Math.floor(newTime / 360000);
        newTime%=360000
        return val
      })
      setMinutes(() => {
        let val = Math.floor(newTime / 6000);
        newTime%=6000
        return val
      })
      setSeconds(() => {
        let val = Math.floor(newTime / 100);
        newTime%=100;
        return val
      })
      setMilliSeconds(() => {
        console.log(newTime);
        return newTime;
      });
    } else {
      setHours(() => {
        let val = Math.floor(newTime / 3600);
        newTime %= 3600;
        return val;
      });
      setMinutes(() => {
        let val = Math.floor(newTime / 60);
        newTime %= 60;
        return val;
      });
      setSeconds(() => {
        return newTime;
      });
    }
  }, [time, value]);

  return (
    <div className={Styles.inputs}>
      <input
        className={Styles.input}
        value={hours}
        type="text"
        id="hours"
        onChange={() => {}}
      />
      h
      <input
        className={Styles.input}
        value={minutes}
        type="text"
        id="minutes"
        onChange={() => {}}
      />
      m
      <input
        className={Styles.input}
        value={seconds}
        type="text"
        id="seconds"
        onChange={() => {}}
      />
      s
      {value === "stopwatch" && (
        <>
          <input
            className={Styles.input}
            value={milliSeconds}
            type="text"
            id="milliSeconds"
            onChange={() => {}}
          />
          <label for="milliSeconds">ms</label>
        </>
      )}
    </div>
  );
};

export default Clock;
