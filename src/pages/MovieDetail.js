import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// API function for fetching single movie details
import { getMovieDetails } from "../api/movies";

// Watchlist context
import { useWatchlist } from "../context/WatchlistContext";

// Movie Detail Component
function MovieDetail() {

  // Getting movie id from URL
  const { id } = useParams();

  // State for storing movie details
  const [movie, setMovie] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState(null);

  // Watchlist functions
  const {
    addToWatchlist,
    removeFromWatchlist,
    watchlist
  } = useWatchlist();

  // =========================================
  // Fetch movie details when page loads
  // =========================================
  useEffect(() => {

    const fetchMovie = async () => {
      try {
        // Start loading
        setLoading(true);

        // Clear old errors
        setError(null);

        // Fetch movie details using ID
        const data = await getMovieDetails(id);

        // Store movie data
        setMovie(data);

      } catch (err) {

        // Show error if API fails
        setError("Failed to load movie details");

      } finally {

        // Stop loading
        setLoading(false);
      }
    };

    fetchMovie();

  }, [id]);

  // =========================================
  // Loading UI
  // =========================================
  if (loading) {
    return <p>Loading movie details...</p>;
  }

  // =========================================
  // Error UI
  // =========================================
  if (error) {
    return (
      <p style={{ color: "red" }}>
        {error}
      </p>
    );
  }

  // =========================================
  // Safety check
  // =========================================
  if (!movie) return null;


  // Check if movie already exists in watchlist
  const isAdded = watchlist.find(
    (item) => item.id === movie.id
  );

  return (
    // Main container
    <div style={{ padding: "20px" }}>

      <div
        style={{
          display: "flex",
          gap: "30px"
        }}
      >

        {/* Movie Poster */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://via.placeholder.com/300"
          }
          alt={movie.title}
          style={{
            width: "300px",
            borderRadius: "10px"
          }}
        />

        {/* Movie Details */}
        <div>

          {/* Movie Title */}
          <h1>{movie.title}</h1>

          {/* Overview */}
          <p>
            <strong>Overview:</strong>{" "}
            {movie.overview}
          </p>

          {/* Release Date */}
          <p>
            <strong>Release Date:</strong>{" "}
            {movie.release_date}
          </p>

          {/* Rating */}
          <p>
            <strong>Rating:</strong>{" "}
            {movie.vote_average}
          </p>

          {/* Genres */}
          <p>
            <strong>Genres:</strong>{" "}

            {movie.genres && movie.genres.length > 0
              ? movie.genres
                  .map((genre) => genre.name)
                  .join(", ")
              : "N/A"}
          </p>

          {/* Watchlist Button */}
          <button
            onClick={() =>
              isAdded
                ? removeFromWatchlist(movie.id)
                : addToWatchlist(movie)
            }
            style={{
              padding: "10px",
              marginTop: "10px"
            }}
          >
            {isAdded
              ? "Remove from Watchlist"
              : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Export component
export default MovieDetail;