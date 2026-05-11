import React, { useEffect, useState } from "react";
import { searchMovies } from "../api/movies";
import MovieCard from "../components/MovieCard";

// Movies component
function Movies() {

  // State for storing searched movies
  const [movies, setMovies] = useState([]);

  // State for storing search input value
  const [query, setQuery] = useState("");


  // Function to search movies
  const handleSearch = async () => {

    // Prevent empty search
    if (!query) return;

    // Fetch movie search results from API
    const results = await searchMovies(query);

    // Store results in state
    setMovies(results);
  };


  return (
    // Main container
    <div className="bg-gray-900 min-h-screen text-white p-6">

      {/* Page heading */}
      <h1>Movies and TV Shows</h1>

      {/* Search Input */}
      <input
        className="w-full p-3 mb-6 bg-gray-800 rounded"
        type="text"
        placeholder="Search movies..."
        value={query}

        // Update query state while typing
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Search Button */}
      <button onClick={handleSearch}>
        Search
      </button>

      <div className="flex flex-wrap gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

// Export component
export default Movies;