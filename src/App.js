import react from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
