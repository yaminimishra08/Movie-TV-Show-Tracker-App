import { createContext, useContext, useState } from "react";

// Creating Authentication Context
const AuthContext = createContext();

// AuthProvider component wraps the application
// and provides authentication data to all components
export const AuthProvider = ({ children }) => {

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to log in user
  const login = () => setIsLoggedIn(true);

  // Function to log out user
  const logout = () => setIsLoggedIn(false);

  return (

    // Providing authentication data and functions
    // to all child components
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext easily
export const useAuth = () => useContext(AuthContext);