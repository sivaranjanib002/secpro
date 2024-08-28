import React from "react";
import "./style.scss";

const Footer = ({
  titlem,
  title,
  st1,
  st2,
  st3,
  st4,
  st5,
  desc,
  image,
  image1,
  image2,
  image3,
}) => {
  return (
    <div className="footerCards">
      <div className="title-m">{titlem}</div>
      <div className="title">{title}</div>
      <div className="subcard">
        <div className="st1">{st1}</div>
        <div className="st2">{st2}</div>
        <div className="st3">{st3}</div>
        <div className="st4">{st4}</div>
        <div className="st5">{st5}</div>
      </div>
      <div className="desc">{desc}</div>
      <div className="image">
        <img src={image} alt="" />
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default Footer;
