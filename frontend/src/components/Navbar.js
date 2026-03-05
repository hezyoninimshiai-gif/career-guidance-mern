import React from "react";

function Navbar() {
  return (
 <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"15px 40px",
    background:"#1f2a44",
    color:"white",
    position:"sticky",
    top:"0"
}}>
      <h2>CareerGuide</h2>

      <div>
        <a href="/" style={{color:"white",marginRight:"20px"}}>Home</a>
        <a href="/about" style={{color:"white",marginRight:"20px"}}>About</a>
        <a href="/contact" style={{color:"white"}}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;