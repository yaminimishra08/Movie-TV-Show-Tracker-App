import React, { useEffect, useState } from "react";
import { getTrendingMovies, searchMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";
import { toast } from "react-toastify";

// Home component
function Home() {

  // State for storing movie list
  const [movies, setMovies] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // =========================================
  // Fetch movies whenever search changes
  // =========================================
  useEffect(() => {

    // Async function to fetch movie data
    const fetchData = async () => {

      try {

        let data;

        // If search box is empty,
        // fetch trending movies
        if (search.trim() === "") {

          data = await getTrendingMovies();

          // Show only first 12 movies
          setMovies(data.slice(0, 12));

        } else {

          // Search movies based on user input
          data = await searchMovies(search);

          // Store searched movies
          setMovies(data);
        }

      } catch {

        // Show error notification if API fails
        toast.error("Failed to fetch movies");
      }
    };

    // Call fetch function
    fetchData();

  }, [search]); // Runs whenever search changes


  // =========================================
  // Filter movies locally based on search text
  // =========================================
  const filteredMovies = movies.filter((movie) =>

    // Convert both values to lowercase for case-insensitive search
    (movie.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    // Main container
    <div style={{ padding: "20px" }}>

      {/* Page Heading */}
      <h1>Trending Movies</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={search}

        // Update search state when typing
        onChange={(e) => setSearch(e.target.value)}

        // Inline styling
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      />

      {/* Movies Grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >

        {/* Loop through filtered movies */}
        {filteredMovies.map((movie) => (

          // Render MovieCard component
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

      {/* Show message if no movies found */}
      {filteredMovies.length === 0 && (
        <p>No movies found</p>
      )}
    </div>
  );
}

// Export component
export default Home;