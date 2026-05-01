import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/watchlist");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-2xl mb-4">Login</h1>
      <button onClick={handleLogin} className="bg-red-600 px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;