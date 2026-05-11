import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { useNavigate } from "react-router-dom";

// MovieCard component receives movie object as prop
function MovieCard({ movie }) {

  // Getting watchlist functions and data from Context API
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  // Hook for page navigation
  const navigate = useNavigate();

  // Check whether movie already exists in watchlist
  const isAdded = watchlist.find((item) => item.id === movie.id);

  return (

    // Main movie card container
    <div

      // Navigate to movie or TV details page on card click
      onClick={() =>
        navigate(movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`)
      }

      // Tailwind classes for styling and hover animation
      className="w-48 cursor-pointer transform hover:scale-110 transition"
    >

      {/* Movie / TV Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="rounded"
      />

      {/* Movie title or TV show name */}
      <h3 className="text-sm mt-2">
        {movie.title || movie.name}
      </h3>

      {/* Add / Remove Watchlist Button */}
      <button
        onClick={(e) => {

          // Prevent card click event when button is clicked
          e.stopPropagation();

          // Add or remove movie from watchlist
          isAdded
            ? removeFromWatchlist(movie.id)
            : addToWatchlist(movie);
        }}

        // Button styling
        className="bg-red-600 text-white w-full mt-2 py-1 rounded"
      >

        {/* Dynamic button text */}
        {isAdded ? "Remove" : "Add"}

      </button>
    </div>
  );
}

// Export MovieCard component
export default MovieCard;