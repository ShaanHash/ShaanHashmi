import React from "react";
import background from "./../Images/bg.jpg";
import linked from "./../Images/linkedin-ico.png";
import git from "./../Images/github-ico.png";

const FirstBody = () => {
  return (
    <div
      className="first-body"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="body-header">Hi, I'm Shaan Hashmi</div>
      <div className="body-sub">
        A Technology Professional with over 5 Years of industry experience.
        Currently specializing in Full Stack Development
      </div>
      <a href="#port">
        <div className="portfolio-button">PROJECTS</div>
      </a>
      <div className="link-row">
        <a href="https://github.com/ShaanHash/">
          <img src={git} alt="" className="social-link"></img>
        </a>
        <a href="https://www.linkedin.com/in/shaanhashmi/">
          <img src={linked} alt="" className="social-link"></img>
        </a>
      </div>
    </div>
  );
};

export default FirstBody;
