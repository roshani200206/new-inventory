import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (user) return <Navigate to="/" />;

  return <Outlet />;
}
