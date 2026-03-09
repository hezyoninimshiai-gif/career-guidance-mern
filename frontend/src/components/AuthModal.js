import React, { useState } from "react";
import axios from "axios";

function AuthModal({ closeModal }) {
  //State
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

//Submit function handleRegister
const handleRegister = async (e) => {
  e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register",
        {
        name,
        email,
        password
      });
      console.log("User registered:", res.data);
      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");

      closeModal(); // close modal after success
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Registration failed");
    }
};
//UI
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
        alignItems: "center",
      }}
      onClick={closeModal} // clicking outside closes modal
    >
      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          borderRadius: "10px",
          minWidth: "300px",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <h2>Create an Account</h2>
        <p>Register to unlock personalized career guidance.</p>

    <form onSubmit={handleRegister}>  
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: "block", margin: "10px auto", padding: "8px", width: "90%" }}
          />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "90%" }}
        />

              <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px", width: "90%" }}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>

        <button type="button" onClick={closeModal} style={{ marginLeft: "10px" }}>
          Close
        </button>
       </form>
      </div>
    </div>
  );
}

export default AuthModal;
