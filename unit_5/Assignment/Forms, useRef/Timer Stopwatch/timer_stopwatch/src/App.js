import React, { useState, useEffect } from "react";
import Styles from "./app.module.css";
import Stopwatch from "./stopWatch";
import Timer from "./timer";

function App() {
  const initialTimerTime = 300;
  const initialStopwatchTime = 0;

  const [isTimer, setIsTimer] = useState(() => true);
  const [isTimerStarted, setIsTimerStarted] = useState(() => false);
  const [timerTime, setTimerTime] = useState(() => initialTimerTime);
  const [stopwatchTime, setStopwatchTime] = useState(
    () => initialStopwatchTime
  );
  const [isStopwatchStarted, setIsStopwatchStarted] = useState(() => false);

  useEffect(() => {
    const timerStarted = setInterval(() => {
      setTimerTime((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        setIsTimerStarted(false);
      });
    }, 1000);
    if (!isTimerStarted) {
      clearInterval(timerStarted);
    }
    const stopStarted = setInterval(() => {
      setStopwatchTime((prev) => prev + 1);
    }, 10);
    if (!isStopwatchStarted) {
      clearInterval(stopStarted);
    }
    return () => {
      clearInterval(timerStarted);
      clearInterval(stopStarted);
    };
  }, [isTimerStarted, isStopwatchStarted]);

  return (
    <>
      <div className={Styles.blBg}>
        {isTimer ? (
          <Timer
            isTimer={isTimer}
            setIsTimer={setIsTimer}
            isTimerStarted={isTimerStarted}
            setIsTimerStarted={setIsTimerStarted}
            timerTime={timerTime}
            setTimerTime={setTimerTime}
            initialTimerTime={initialTimerTime}
          />
        ) : (
          <Stopwatch
            isTimer={isTimer}
            setIsTimer={setIsTimer}
            isStopwatchStarted={isStopwatchStarted}
            setIsStopwatchStarted={setIsStopwatchStarted}
            stopwatchTime={stopwatchTime}
            setStopwatchTime={setStopwatchTime}
            initialStopwatchTime={initialStopwatchTime}
          />
        )}
      </div>
    </>
  );
}

export default App;
