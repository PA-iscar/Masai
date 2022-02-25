import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <>
      <div style={{ position: "absolute", right: "40px" }}>
        <Link to={"/"}>
          <button>HOME</button>
        </Link>
      </div>
    </>
  );
};

export default HomeButton;
