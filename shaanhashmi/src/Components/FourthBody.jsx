import React from "react";
import background from "./../Images/bg.jpg";
import link from "./../Images/linkedin-ico.png";
import mail from "./../Images/mail.png";
import cv from "./../Images/cv.png";
import git from "./../Images/github-ico.png";

const FourthBody = () => {
  return (
    <div
      className="fourth-body"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="third-header">Contact Me</div>
      <div className="contact-container">
        <a href="index.html">
          <img src={link} alt="" className="social-link"></img>
        </a>
        <a href="index.html">
          <img src={git} alt="" className="social-link"></img>
        </a>
        <a href="index.html">
          <img src={mail} alt="" className="social-link"></img>
        </a>
        <a href="index.html">
          <img src={cv} alt="" className="social-link"></img>
        </a>
      </div>
    </div>
  );
};

export default FourthBody;
