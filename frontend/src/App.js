import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CareerPaths from "./components/CareerPaths";
import Opportunities from "./components/Opportunities";
import AuthModal from "./components/AuthModal";
import ProtectedRoute from "./components/ProtectedRoute";

import TenthPage from "./pages/TenthPage";
import MPCPage from "./pages/MPCPage";
import BIPCPage from "./pages/BIPCPage";
import CECPage from "./pages/CECPage";
import MECPage from "./pages/MECPage";
import HECPage from "./pages/HECPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home({ openModal }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <CareerPaths />
      <Opportunities />

      {showModal && <AuthModal closeModal={() => setShowModal(false)} />}
    </>
  );
}

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Router>
      <Navbar />
      {showAuthModal && (
        <AuthModal closeModal={() => {
          setShowAuthModal(false);
        }} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/mpc"
          element={
            <ProtectedRoute openModal={() => setShowAuthModal(true)}>
              <MPCPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bipc"
          element={
            <ProtectedRoute openModal={() => setShowAuthModal(true)}>
              <BIPCPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cec"
          element={
            <ProtectedRoute openModal={() => setShowAuthModal(true)}>
              <CECPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mec"
          element={
            <ProtectedRoute openModal={() => setShowAuthModal(true)}>
              <MECPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hec"
          element={
            <ProtectedRoute openModal={() => setShowAuthModal(true)}>
              <HECPage />
            </ProtectedRoute>
          }
        />

        <Route path="/10th" element={<TenthPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;