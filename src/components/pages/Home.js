import React, { useEffect } from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import { useUserContext } from "../context/userContext";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, logoutUser } = useUserContext;
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
