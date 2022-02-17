import Styles from "./app.module.css";
import React from "react";

const Footer = ({ isStarted, setIsStarted, time, setTime, initialTime }) => {
  const resetWatch = () => {
    setIsStarted(false);
    setTime(initialTime);
  };
  return (
    <>
      <div className={Styles.footer}>
        <button
          className={`${Styles.btn} ${Styles.start}`}
          onClick={() => setIsStarted((prev) => !prev)}
        >
          {isStarted ? "STOP" : "START"}
        </button>
        <button className={`${Styles.btn}`} onClick={resetWatch}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Footer;
