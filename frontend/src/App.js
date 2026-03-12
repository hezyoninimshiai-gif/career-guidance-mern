import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CareerPaths from "./components/CareerPaths";
import Opportunities from "./components/Opportunities";

import TenthPage from "./pages/TenthPage";
import MPCPage from "./pages/MPCPage";
import BIPCPage from "./pages/BIPCPage";
import CECPage from "./pages/CECPage";
import MECPage from "./pages/MECPage";
import HECPage from "./pages/HECPage";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AuthModal from "./components/AuthModal";


function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    // Check token
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }

    // Track visits
    let visits = localStorage.getItem("visits");
    visits = visits ? parseInt(visits) + 1 : 1;

    localStorage.setItem("visits", visits);

    // Show modal from 2nd visit
    if (visits >= 2) {

      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000); // 2 minutes

      return () => clearTimeout(timer);
    }

  }, []);


  return (
    <>
      <HeroSection />
      <CareerPaths />
      <Opportunities />

      {/* Show modal only if NOT logged in */}
      {!isLoggedIn && showModal && (
        <AuthModal closeModal={() => setShowModal(false)} />
      )}
    </>
  );
}


function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/10th" element={<TenthPage />} />
        <Route path="/mpc" element={<MPCPage />} />
        <Route path="/bipc" element={<BIPCPage />} />
        <Route path="/cec" element={<CECPage />} />
        <Route path="/mec" element={<MECPage />} />
        <Route path="/hec" element={<HECPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;