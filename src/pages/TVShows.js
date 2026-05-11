import React, { useEffect, useState } from "react";
import { getTrendingTV, searchTV } from "../api/movies";
import MovieCard from "../components/MovieCard";
import { toast } from "react-toastify";

// TVShows component
function TVShows() {

  // State for storing TV shows
  const [shows, setShows] = useState([]);

  // State for search input field
  const [search, setSearch] = useState("");

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for handling errors
  const [error, setError] = useState(null);


  // =========================================
  // Fetch TV shows whenever search changes
  // =========================================
  useEffect(() => {

    // Async function for fetching data
    const fetchData = async () => {

      try {

        // Enable loading state
        setLoading(true);

        // Clear previous errors
        setError(null);

        let data;

        // If search box is empty fetch trending TV shows
        if (search.trim() === "") {

          data = await getTrendingTV();

        } else {

          // Search TV shows using query
          data = await searchTV(search);
        }

        // Store fetched TV shows
        setShows(data || []);

      } catch (err) {

        // Log error in console
        console.error(err);

        // Set error message
        setError("Failed to load TV shows");

      } finally {

        // Disable loading state
        setLoading(false);
      }
    };

    // Call fetch function
    fetchData();

    // Runs whenever search changes
    }, [search]); 
  
  // =========================================
  // Loading State
  // =========================================
  if (loading) {
    return (
      <p style={{ padding: "20px" }}>
        Loading TV shows...
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

  return (

    // Main container
    <div style={{ padding: "20px" }}>

      {/* Page Heading */}
      <h1>TV Shows</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search TV shows..."
        value={search}

        // Update search state while typing
        onChange={(e) => setSearch(e.target.value)}

        // Inline styling
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      />

      {/* Conditional Rendering */}
      {shows.length === 0 ? (

        // Show message if no TV shows found
        <p>No TV shows found</p>

      ) : (

        // TV Shows Grid Container
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >

          {/* Loop through shows array */}
          {shows.map((show) => (

            // Render MovieCard component
            <MovieCard key={show.id} movie={show} type="tv" />

          ))}

        </div>
      )}

    </div>
  );
}

// Export component
export default TVShows;