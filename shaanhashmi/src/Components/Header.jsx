import React from "react";
import pfp from "./../Images/pfp.png";

const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="left-group ms-4 gap-1">
        <img
          src={pfp}
          alt=""
          className="prof-img"
        ></img>
        <div className="header-name">SHAAN HASHMI</div>
      </div>
      <nav className="right-group me-4">
        <label id="hamburger" htmlFor="toggle">
          &#9776;
        </label>
        <input type="checkbox" id="toggle"></input>
        <div className="menu">
          <a href="#home" className="link-text">
            HOME
          </a>
          <a href="#about" className="link-text">
            ABOUT
          </a>
          <a href="#port" className="link-text">
            PROJECTS
          </a>
          <a href="#contact" className="link-text">
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
