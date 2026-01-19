import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
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
