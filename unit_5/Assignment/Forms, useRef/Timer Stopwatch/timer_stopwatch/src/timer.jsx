import React from "react";
import Header from "./header";
import Footer from "./footer";
import Watch from "./watch";

const Timer = ({
  isTimer,
  setIsTimer,
  isTimerStarted: isStarted,
  setIsTimerStarted: setIsStarted,
  timerTime: time,
  setTimerTime: setTime,
  initialTimerTime: initialTime,
}) => {
  return (
    <>
      <Header isTimer={isTimer} setIsTimer={setIsTimer} />
      <Watch
        value={"timer"}
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

export default Timer;
