import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { toast } from "react-toastify";

// Creating Watchlist Context
const WatchlistContext = createContext();

// WatchlistProvider component provides
// watchlist data and functions to the app
export const WatchlistProvider = ({ children }) => {

  // State for storing watchlist items
  const [watchlist, setWatchlist] = useState([]);

  // =========================================
  // Load watchlist from localStorage safely
  // =========================================
  useEffect(() => {

    try {

      // Get stored watchlist data
      const data = localStorage.getItem("watchlist");
      const stored = JSON.parse(data);

      // Set watchlist or empty array
      setWatchlist(stored || []);

    } catch {

      // Handle invalid JSON or storage errors
      setWatchlist([]);
    }

  }, []);


  // ================================================
  // Sync watchlist with localStorage automatically
  // ================================================
  useEffect(() => {

    // Save updated watchlist into localStorage
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

  }, [watchlist]);


  // =========================================
  // Add movie or TV show to watchlist
  // =========================================
  const addToWatchlist = (movie) => {

    // Check if movie already exists
    let exists = false;

    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        exists = true;
      }
    }

    if (!exists) {

      // Add movie to watchlist
      const updatedList = [...watchlist];
      updatedList.push(movie);

      setWatchlist(updatedList);

      // Success notification
      toast.success("Added to Watchlist");

    } else {

      // Info notification if already added
      toast.info("Already in Watchlist");
    }
  };


  // =========================================
  // Remove movie or TV show from watchlist
  // =========================================
  const removeFromWatchlist = (id) => {

    // Remove item using filter
    const updatedWatchlist = watchlist.filter(function(item) {
      return item.id !== id;
    });

    setWatchlist(updatedWatchlist);

    // Error-style notification
    toast.error("Removed from Watchlist");
  };


  return (

    // Providing watchlist data and functions
    // to all child components
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};


// =========================================
// Custom Hook for easy context access
// =========================================
export const useWatchlist = () => {

  return useContext(WatchlistContext);
};