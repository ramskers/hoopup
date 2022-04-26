import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hero-container"
    >
      <video src="/videos/background.mp4" autoPlay loop muted />
      <div className="overlay"></div>
      <h1>Pickup Basketball</h1>
      <p>ANYWHERE. ANYTIME.</p>
      <div className="hero-btns">
        <Button
          route="/signUp"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          route="/login"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Sign In
        </Button>
      </div>
    </motion.div>
  );
}

export default HeroSection;
