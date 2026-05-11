import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTVDetails } from "../api/movies";
import { useWatchlist } from "../context/WatchlistContext";

// TVDetail component
function TVDetail() {

  // Get TV show ID from URL parameters
  const { id } = useParams();

  // State for storing TV show details
  const [show, setShow] = useState(null);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for error handling
  const [error, setError] = useState(null);

  // Get watchlist functions and data from Context API
  const {
    addToWatchlist,
    removeFromWatchlist,
    watchlist
  } = useWatchlist();


  // =========================================
  // Fetch TV show details when component loads or when ID changes
  // =========================================
  useEffect(() => {

    // Async function for API request
    const fetchData = async () => {

      try {
        // Start loading
        setLoading(true);

        // Fetch TV details using ID
        const data = await getTVDetails(id);

        // Store TV show data
        setShow(data);

      } catch (err) {

        // Set error message if request fails
        setError("Failed to load TV show");

      } finally {

        // Stop loading
        setLoading(false);
      }
    };

    // Call fetch function
    fetchData();
}, [id]);

// Loading State
if (loading) {
    return (
      <p style={{ padding: "20px" }}>
        Loading...
      </p>
    );
  }

  // =========================================
  // Error State
  // =========================================
  if (error) {
    return (
      <p style={{ color: "red", padding: "20px" }}>
        {error}
      </p>
    );
  }

  // =========================================
  // Safety Check
  // =========================================
  if (!show) return null;


  // Check if TV show already exists in watchlist
  const isAdded = watchlist.find(
    (item) => item.id === show.id
  );

  return (

    // Main container
    <div style={{ padding: "20px" }}>

      {/* Content Layout */}
      <div style={{ display: "flex", gap: "30px" }}>

        {/* =========================================
            TV Show Poster
        ========================================= */}
        <img
          src={
            show.poster_path
              ? `https://image.tmdb.org/t/p/w300${show.poster_path}`
              : "https://via.placeholder.com/300"
          }

          alt={show.name}

          style={{
            width: "300px",
            borderRadius: "10px"
          }}
        />

        {/* =========================================
            TV Show Details
        ========================================= */}
        <div>

          {/* TV Show Name */}
          <h1>{show.name}</h1>


          {/* Overview */}
          <p>
            <strong>Overview:</strong> {show.overview}
          </p>


          {/* First Air Date */}
          <p>
            <strong>First Air Date:</strong>{" "}
            {show.first_air_date}
          </p>

          {/* Rating */}
          <p>
            <strong>Rating:</strong>{" "}
            {show.vote_average}
          </p>

          {/* Genres */}
          <p>
            <strong>Genres:</strong>{" "}

            {show.genres && show.genres.length > 0
              ? show.genres
                  .map((g) => g.name)
                  .join(", ")
              : "N/A"}
          </p>

          {/* Watchlist Button */}
          <button
            onClick={() =>

              // Add or remove show from watchlist
              isAdded
                ? removeFromWatchlist(show.id)
                : addToWatchlist(show)
            }

            style={{
              padding: "10px",
              marginTop: "10px"
            }}
          >

            {/* Dynamic Button Text */}
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
export default TVDetail;