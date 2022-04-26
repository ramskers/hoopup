import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Courts from "./components/pages/Courts";
import Groups from "./components/pages/Groups";
import CreatePost from "./components/pages/CreatePost";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ForgottenPassword from "./components/pages/forgottenPassword";

import { UserContext, useUserContext } from "./components/context/userContext";
import { useState } from "react";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  const { user } = useUserContext(UserContext);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={user ? <Groups /> : <Home />} />
        <Route path="/courts" element={<Courts isAuth={isAuth} />} />
        <Route path="/groups" element={<Groups isAuth={isAuth} />} />
        <Route path="/createPost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/contact" element={<Contact isAuth={isAuth} />} />
        <Route path="/signUp" element={<SignUp setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/forgottenPassword" element={<ForgottenPassword />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
