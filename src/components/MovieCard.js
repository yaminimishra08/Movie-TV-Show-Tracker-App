import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import { useNavigate } from "react-router-dom";
function MovieCard({ movie }) {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();
  const navigate = useNavigate();

  const isAdded = watchlist.find((item) => item.id === movie.id);

  return (
    <div
      onClick={() =>
        navigate(movie.title ? `/movie/${movie.id}` : `/tv/${movie.id}`)
      }
      className="w-48 cursor-pointer transform hover:scale-110 transition"
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        className="rounded"
      />

      <h3 className="text-sm mt-2">{movie.title || movie.name}</h3>

      <button
        onClick={(e) => {
          e.stopPropagation();
          isAdded
            ? removeFromWatchlist(movie.id)
            : addToWatchlist(movie);
        }}
        className="bg-red-600 text-white w-full mt-2 py-1 rounded"
      >
        {isAdded ? "Remove" : "Add"}
      </button>
    </div>
  );
}


export default MovieCard;