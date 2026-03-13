import React, { useState } from "react";
import axios from "axios";

function AuthModal({ closeModal }) {

  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password
      });

      alert("Registration successful");

      setIsLogin(true);

    } catch (error) {
      alert("Registration failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful");

      closeModal();

      window.location.reload();

    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={closeModal}
    >

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          minWidth: "320px",
          textAlign: "center",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            width: "35px",
            height: "30px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#dc2929",
            color: "#f0e7e7",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          X
        </button>

        <h2>{isLogin ? "Login" : "Create an Account"}</h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ display: "block", margin: "10px auto", padding: "8px" }}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px" }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ display: "block", margin: "10px auto", padding: "8px" }}
          />

          <button type="submit" style={{ marginTop: "10px" }}>
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <p style={{ marginTop: "15px" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>

        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </button>

      </div>

    </div>
  );
}

export default AuthModal;