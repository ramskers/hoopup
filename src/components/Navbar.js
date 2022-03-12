import { CloseOutlined, MenuOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const makeResponsive = () => {
    if (window.innerWidth <= 960) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    makeResponsive();
  }, []);

  window.addEventListener("resize", () => makeResponsive());

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HoopUp
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/courts"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Courts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/groups"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signUp"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {showButton && (
            <Button route="/signUp" buttonStyle="btn--outline">
              SIGN UP
            </Button>
          )}
          {showButton && (
            <Button route="/login" buttonStyle="btn--outline">
              LOG IN
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
