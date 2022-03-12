import React, { useEffect } from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
