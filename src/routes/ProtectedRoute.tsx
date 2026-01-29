import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  // console.log("ProtectedRoute", { isAuthenticated, loading });
  return children;
}
