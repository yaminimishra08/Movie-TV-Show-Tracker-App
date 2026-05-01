import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  // Load safely
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("watchlist"));
      setWatchlist(stored || []);
    } catch {
      setWatchlist([]);
    }
  }, []);

  // Sync automatically
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    const exists = watchlist.find((item) => item.id === movie.id);

    if (!exists) {
      setWatchlist([...watchlist, movie]);
      toast.success("Added to Watchlist");
    } else {
      toast.info("Already in Watchlist");
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
    toast.error("Removed from Watchlist");
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

// Custom Hook (VALID)
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};