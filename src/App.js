// Importing React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
//Home Page
import Home from "./pages/Home";
// Movies Page
import Movies from "./pages/Movies";
// Movie Detail Page
import MovieDetail from "./pages/MovieDetail";
// TV Shows Page
import TVShows from "./pages/TVShows";
// TV Detail Page
import TVDetail from "./pages/TVDetail";
// Watch list Page
import WatchLists from "./pages/WatchLists";

// Layout
import Layout from "./components/Layout";

// Context
import { WatchlistProvider } from "./context/WatchlistContext";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";


// This is the main App component (root of your React app)
function App() {
  return (
    <AuthProvider>
    <WatchlistProvider>
    <BrowserRouter>
    <Layout>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Movies Routes */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />

        {/* TV Shows Routes */}
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/tv/:id" element={<TVDetail />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Watchlist Route */}
        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <WatchLists />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
    
    {/* Toast UI */}
    <ToastContainer position="top-right" autoClose={2000} />
    </BrowserRouter>
    </WatchlistProvider>
    </AuthProvider>
  );
}

// This allows other files to use this component
export default App;
