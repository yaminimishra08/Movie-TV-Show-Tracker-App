import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

// WatchLists component
function WatchLists() {

  // Get watchlist data from Context API
  const { watchlist } = useWatchlist();

  return (

    // Main container
    <div style={{ padding: "20px" }}>

      {/* Page Heading */}
      <h1>My Watchlist</h1>


      {/* =========================================
          Conditional Rendering
      ========================================= */}

      {watchlist.length === 0 ? (

        // Message when watchlist is empty
        <p style={{ marginTop: "20px" }}>
          No items in your watchlist
        </p>

      ) : (

        // Watchlist items container
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px"
          }}
        >

          {/* Loop through watchlist items */}
          {watchlist.map((item) => (

            // Render MovieCard component
            <MovieCard
              key={item.id}
              movie={item}
            />

          ))}

        </div>
      )}

    </div>
  );
}

// Export component
export default WatchLists;