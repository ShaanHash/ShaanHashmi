import React from "react";
import resume from "./../Files/Shaan H - CV 2022.pdf";

const SecondBody = () => {
  return (
    <div className="second-body" id="about">
      <div>
        <div className="second-header">About Me</div>
      </div>
      <div className="dark-body">
        Here you can find a brief overview of my skills and experiences
      </div>
      <div className="about-main-grid">
        <div className="col-container-left">
          <div className="dark-sub-header">A Brief Summary:</div>
          <div className="dark-sub-text">
            I am currently an SAP Implementation consultant working on large
            scale commercial software integrations. I have many years of
            experience designing, configuring, and implementing large scale
            packaged software for a variety of clients across many industries.
          </div>
          <div className="dark-sub-text">
            In parallel, I have spent many years building and deploying
            full-stack web applications. Leveraging my understanding of
            computing systems, programming, and working on large scale projects,
            gives me a unique perspective on solving problems.
          </div>
          <div className="dark-sub-text">
            My formal educational background is Finance and Mathematics. This,
            in many ways contributes to a unique understanding of the business
            problems that technology is trying to solve.
          </div>
          <a href={resume}>
            <div className="contact-button">RESUME</div>
          </a>
        </div>
        <div className="col-container-right">
          <div className="dark-sub-header">Technical Skills:</div>
          <div className="skills-container">
            <div className="skill">HTML 5</div>
            <div className="skill">CSS 3</div>
            <div className="skill">JavaScript ES6/ES5</div>
            <div className="skill">Typescript</div>
            <div className="skill">Python 3</div>
            <div className="skill">React JS</div>
            <div className="skill">Node JS</div>
            <div className="skill">Express</div>
            <div className="skill">Mongo DB</div>
            <div className="skill">Postgres SQL</div>
            <div className="skill">Bootstrap 5</div>
            <div className="skill">SAP S/4 HANA</div>
            <div className="skill">Visual Basic for Applications</div>
            <div className="skill">Webpack</div>
            <div className="skill">JQuery</div>
            <div className="skill">WorkSoft</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondBody;
