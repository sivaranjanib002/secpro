import React from "react";
import "./style.scss";

const OurDocters = ({ Image, title, desc }) => {
  return (
    <div className="ourDocters">
      <div className="titleContainer">{title}</div>
      <div className="desc">{desc}</div>

      <div className="imgContainer">
        <img src={Image} alt="img" />
      </div>
    </div>
  );
};

export default OurDocters;
