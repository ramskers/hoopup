import react from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Courts from "./components/pages/Courts";
import Groups from "./components/pages/Groups";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
