import React from "react";
import Styles from "./app.module.css";

const Header = ({ isTimer, setIsTimer }) => {
  return (
    <>
      <div className={`${Styles.header}`}>
        <button
          className={`${isTimer ? Styles.isActive : ""} ${Styles.btn}`}
          onClick={(e) => {
            setIsTimer(e.target.textContent === "TIMER");
          }}
          disabled={isTimer}
        >
          TIMER
        </button>
        <button
          className={`${isTimer ? "" : Styles.isActive} ${Styles.btn}`}
          onClick={(e) => {
            setIsTimer(e.target.textContent === "TIMER");
          }}
          disabled={!isTimer}
        >
          STOPWATCH
        </button>
      </div>
    </>
  );
};

export default Header;
