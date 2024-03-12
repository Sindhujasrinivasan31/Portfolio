import React from "react";
import "./Floatdiv.css";

const Floatdiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default Floatdiv;
