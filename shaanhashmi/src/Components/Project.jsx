import React from "react";

const Project = (props) => {
  return (
    <div className="project-wrapper">
      <div className="project-side-left">
        <img src={props.source} alt="" className="image-holder"></img>
      </div>
      <div className="project-side-right">
        <div className="dark-sub-header-1">{props.header}</div>
        <div className="dark-sub-text">{props.desc}</div>
        <a href={props.link}>
          <div className="contact-button">Link</div>
        </a>
      </div>
    </div>
  );
};

export default Project;
