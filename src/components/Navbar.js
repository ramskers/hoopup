import { CloseOutlined, MenuOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

import { UserContext, useUserContext } from "./context/userContext";
import { signOut } from "firebase/auth";
import { useAuth, onAuthStateChanged, logout, auth } from "./firebase";
import { getAuth } from "./firebase";
import { logoutUser } from "./context/userContext";

function Navbar() {
  const { user, logoutUser } = useUserContext(UserContext);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const [click, setClick] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

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

  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

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
              {!isAuth && (
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              )}
            </li>
            {isAuth ? (
              <>
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
                    to="/createpost"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Create Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/signUp"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {isAuth && (
              <>
                <Link
                  className="nav-links-mobile"
                  to="/login"
                  onClick={signUserOut}
                >
                  Log Out
                </Link>
                <li className="nav-links-mobile">{currentUser?.email}</li>
              </>
            )}
          </ul>
          <div className="dropdown">
            {isAuth && (
              <Button route="/" className="dropbtn" buttonStyle="btn--outline">
                {currentUser?.email}
              </Button>
            )}
            <div className="dropdown-content">
              {!isAuth ? (
                <>
                  <Link
                    className="drop-link"
                    to="/signUp"
                    buttonStyle="btn--outline"
                  >
                    Sign Up
                  </Link>
                  <Link
                    className="drop-link"
                    to="/login"
                    buttonStyle="btn--outline"
                  >
                    Log In
                  </Link>
                </>
              ) : (
                <Link
                  className="drop-link"
                  to="/login"
                  buttonStyle="btn--outline"
                  onClick={signUserOut}
                >
                  Log Out
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
