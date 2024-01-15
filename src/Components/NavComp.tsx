import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Styles/Nav.css";
import { GiCyberEye } from "react-icons/gi";

const NavComp: React.FC = () => {
  const [isResponsive, setisResponsive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleResponsiveness = (): void => {
    setisResponsive((prevState) => !prevState);
  };

  useEffect(() => {
    const x = document.getElementById("myTopnav");
    if (x) {
      x.className = isResponsive ? "topnav responsive" : "topnav";
    }
  });

  return (
    <>
      <div className="topnav" id="myTopnav">
        <h1 id="menu">Menu</h1>
        <div id="menu-items">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
          <Link to="/skills">
            <span>Skills</span>
          </Link>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
          <div id="down">
              <a href="https://drive.google.com/file/d/13NU8XP9YfdmxU4slnqroxUeidltqUbfP/view?usp=sharing" target="blank">
              <p>Preview</p>
            <span>
              <GiCyberEye />
            </span>
              </a>
          </div>
        </div>
        <a className="icon" onClick={toggleResponsiveness}>
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </a>
      </div>

      <Outlet />
    </>
  );
};

export default NavComp;
