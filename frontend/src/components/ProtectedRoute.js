import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, openModal }) {

  const token = localStorage.getItem("token");

  if (!token) {
    openModal();
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;