import React, { useState, useEffect } from "react";

function Navbar() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav style={{ padding: "15px", background: "#333", color: "white" }}>
      
      <span style={{ marginRight: "20px" }}>Career Guidance</span>

      {user ? (
        <>
          <span style={{ marginRight: "15px" }}>
            Welcome {user.name}
          </span>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <span>Guest</span>
      )}

    </nav>
  );
}

export default Navbar;