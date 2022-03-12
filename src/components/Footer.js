import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading" style={{ fontSize: "24px" }}>
          Create an account to receive alerts on pickup games NEAR YOU
        </p>
        <p className="footer-subscription-text" style={{ fontSize: "18px" }}>
          Sign up now!
        </p>
        <Button route="/signUp" buttonStyle="btn--outline">
          Create Account
        </Button>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/signUp">How it works</Link>
            <Link to="/">Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Videos</Link>
            <Link to="/">Video Reels</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "24px",
              }}
            >
              HoopUp
            </Link>
          </div>
          <small className="website-rights">HoopUp © 2022</small>
          <div className="social-icons">
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook style={{ color: "#fff" }} />
            </Link>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram style={{ color: "#fff" }} />
            </Link>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <YouTube style={{ color: "#fff" }} />
            </Link>
            <Link
              className="Social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
