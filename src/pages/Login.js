import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Login component
function Login() {

  // Get login function from Auth Context
  const { login } = useAuth();

  // Hook for page navigation
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = () => {

    // Update login state
    login();

    // Redirect user to watchlist page
    navigate("/watchlist");
  };

  return (

    // Main container
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">

      {/* Page Heading */}
      <h1 className="text-2xl mb-4">
        Login
      </h1>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="bg-red-600 px-4 py-2 rounded"
      >
        Login
      </button>
    </div>
  );
}

// Export component
export default Login;