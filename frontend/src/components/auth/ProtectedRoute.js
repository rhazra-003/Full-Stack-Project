import React from "react";
import { Navigate, Route } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (!localStorage.getItem("accessToken")) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}
