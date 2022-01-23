import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-group ms-4 gap-1">
        <img
          src={"https://loremflickr.com/32/32"}
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
          <a href="index.html" className="link-text">
            HOME
          </a>
          <a href="index.html" className="link-text">
            ABOUT
          </a>
          <a href="index.html" className="link-text">
            PROJECTS
          </a>
          <a href="index.html" className="link-text">
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
