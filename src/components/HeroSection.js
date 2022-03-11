import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/background.mp4" autoPlay loop muted />
      <div className="overlay"></div>
      <h1>Pickup Basketball</h1>
      <p>ANYWHERE. ANYTIME.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
