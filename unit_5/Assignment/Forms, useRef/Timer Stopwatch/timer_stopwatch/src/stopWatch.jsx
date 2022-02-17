import React from "react";
import Header from "./header";
import Footer from "./footer";
import Watch from "./watch";

const Stopwatch = ({
  isTimer,
  setIsTimer,
  isStopwatchStarted: isStarted,
  setIsStopwatchStarted: setIsStarted,
  stopwatchTime: time,
  setStopwatchTime: setTime,
  initialStopwatchTime: initialTime,
}) => {
  return (
    <>
      <Header isTimer={isTimer} setIsTimer={setIsTimer} />
      <Watch
        value={"stopwatch"}
        time={time}
        setTime={setTime}
        isStarted={isStarted}
        setIsStarted={setIsStarted}
      />
      <Footer
        isStarted={isStarted}
        setIsStarted={setIsStarted}
        time={time}
        setTime={setTime}
        initialTime={initialTime}
      />
    </>
  );
};

export default Stopwatch;
