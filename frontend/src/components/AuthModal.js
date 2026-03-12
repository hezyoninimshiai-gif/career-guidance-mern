import React, { useState } from "react";
import axios from "axios";

function AuthModal({ closeModal }) {
  //State
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogin, setIsLogin] = React.useState(false);
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
const handleLogin = async (e) => {

  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );
    localStorage.setItem("token", res.data.token);
    alert("Login successful");
    closeModal();
    window.location.reload();
  } catch (error) {
    alert("Login failed");

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
        <h2>{isLogin ? "Login" : "Create an Account"}</h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>     
               {!isLogin && (
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                />
             )}

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

        <button type="submit"
         style={{ marginTop: "10px" }}>
          {isLogin ? "Login" : "Register"}
        </button>
        <p style={{ marginTop: "10px", cursor: "pointer" }}
        onClick={()=>setIsLogin(!isLogin)}>
        {isLogin ? "Create new account" : "Already have an account? Login"}
        </p>
       </form>
      </div>
    </div>
  );
}

export default AuthModal;
