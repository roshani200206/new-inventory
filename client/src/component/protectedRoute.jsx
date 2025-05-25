import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}

export default ProtectedRoute;
