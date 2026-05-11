import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// ProtectedRoute component protects private pages
function ProtectedRoute({ children }) {

  // Get login status from Auth Context
  const { isLoggedIn } = useAuth();

  // If user is not logged in,
  // redirect them to login page
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If logged in, render protected content
  return children;
}

// Export component
export default ProtectedRoute;