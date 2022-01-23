import React from "react";
import background from "./../Images/bg.jpg";
import link from "./../Images/linkedin-ico.png";
import mail from "./../Images/mail.png";
import cv from "./../Images/cv.png";
import git from "./../Images/github-ico.png";
import resume from "./../Files/Shaan H - CV 2022.pdf";

const FourthBody = () => {
  return (
    <div
      className="fourth-body"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
      id="contact"
    >
      <div className="third-header">Contact Me</div>
      <div className="contact-container">
        <a href="https://www.linkedin.com/in/shaanhashmi/">
          <img src={link} alt="" className="social-link"></img>
        </a>
        <a href="https://github.com/ShaanHash/">
          <img src={git} alt="" className="social-link"></img>
        </a>
        <a href="mailto:hashmishaana@gmail.com">
          <img src={mail} alt="" className="social-link"></img>
        </a>
        <a href={resume}>
          <img src={cv} alt="" className="social-link"></img>
        </a>
      </div>
    </div>
  );
};

export default FourthBody;
