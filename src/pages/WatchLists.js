import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import MovieCard from "../components/MovieCard";

function WatchLists() {
  const { watchlist } = useWatchlist();

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p style={{ marginTop: "20px" }}>
          No items in your watchlist
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {watchlist.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchLists;