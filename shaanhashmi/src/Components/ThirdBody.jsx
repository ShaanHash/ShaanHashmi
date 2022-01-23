import React from "react";
import Project from "./Project";
import ff from "./../Images/fashionforecast.png";

const ThirdBody = () => {
  return (
    <div className="third-body">
      <div className="second-header">Portfolio</div>
      <div className="dark-body">
        Here you can find a list of projects that I have designed and built
      </div>
      <div className="project-holder">
        <div className="project-list">
          <Project
            header="Fashion Forecast"
            desc="Fashion Forecast was designed to solve a unique problem. 
            This application allows users to sign-up to recieve daily text-alerts on whatever schedule they preffered.
            These text-alerts would inform the user about what to wear for the weather and not what the weather is outside. 
            Focus on your day, and not the weather."
            link="index.html"
            source={ff}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdBody;
